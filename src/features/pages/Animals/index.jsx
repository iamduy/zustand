import { Image, Table } from "antd";
import React, { useEffect, useState } from "react";
import { EndPoint } from 'config/api';
import { useRequest } from "hooks";
import { BaseModal } from "atoms";
const AnimalManage = () => {
  const { onGetExecute } = useRequest();
  const [animals, setAnimals] = useState([])


  const getAnimals = async () => {
    const response = await onGetExecute(EndPoint.ANIMALS, {})
    if (response) {
      setAnimals(response)
    }
  }

  useEffect(() => {
    getAnimals();
  }, [])
  console.log('hi')


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: () => <Image src='avatar' width={200} />
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt'
    }
  ]

  return (

    <>
      <Table
        columns={columns}
        dataSource={animals}
      />
      <BaseModal />
    </>

  )
}

export default AnimalManage