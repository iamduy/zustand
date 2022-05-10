import { Table } from "antd";
import { EndPoint } from "config/api";
import { useRequest } from "hooks";
import React, { useEffect, useMemo, useState } from "react";
import { Spaces } from "./styled";
const AnimalManage = () => {
  const { onGetExecute } = useRequest();
  const [animals, setAnimals] = useState([]);
  const getAnimals = async () => {
    const response = await onGetExecute(EndPoint.ANIMALS, {});
    if (response) {
      setAnimals(response);
    }
  };

  useEffect(() => {
    getAnimals();
  }, []);

  const columns = useMemo(() => {
    return [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
      },
      {
        title: "Updated At",
        dataIndex: "updatedAt",
        key: "updatedAt",
      },
    ];
  }, [animals]);

  return (
    <Spaces>
      <Table columns={columns} dataSource={animals} />
    </Spaces>
  );
};

export default AnimalManage;
