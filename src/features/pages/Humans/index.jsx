import { Table, Button, Input, Row, Col } from "antd";
import React, { useState } from "react";
import { Spaces } from "./styled";
import { useStore } from "zustands";
import { DeleteOutlined } from "@ant-design/icons";
const HumanManage = () => {
  const people = useStore((state) => state.people);
  const postPerson = useStore((state) => state.post);
  const removePerson = useStore((state) => state.remove);

  const [value, setValue] = useState();

  const onCreate = () => {
    postPerson({
      id: Math.floor(Math.random() * 100),
      name: value,
    });
  };
  const onRemove = (id) => {
    removePerson(id);
  };

  const columns = [
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
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <DeleteOutlined onClick={() => onRemove(record.id)} />
      ),
    },
  ];

  return (
    <Spaces>
      <Row gutter={16} style={{ paddingBottom: "40px" }}>
        <Col span={4}>
          <Input
            placeholder="Enter name animal"
            onChange={(v) => setValue(v.target.value)}
          />
        </Col>
        <Col span={12}>
          <Button onClick={() => onCreate()}>Create</Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={people} />
    </Spaces>
  );
};

export default HumanManage;
