import React from "react";
import { Button, Table, Card } from "antd";
import Modal from "antd/lib/modal/Modal";
import ModalClassA from "./modalClassA";
const ClassA = () => {
  const dataSource = [
    {
      id: "DT010234",
      name: "tuan",
      tp1: 9,
      tp2: 7,
      tp3: 3,
      kthp: 7,
      evaluate: "DAT",
    },
    {
      id: "DT0102342",
      name: "tuan",
      tp1: 9,
      tp2: 7,
      tp3: 3,
      kthp: 7,
      evaluate: "DAT",
    },
    {
      id: "DT01023432",
      name: "tuan",
      tp1: 9,
      tp2: 7,
      tp3: 3,
      kthp: 7,
      evaluate: "DAT",
    },
    {
      id: "DT01023433",
      name: "tuan",
      tp1: 9,
      tp2: 7,
      tp3: 3,
      kthp: 7,
      evaluate: "DAT",
    },
    {
      id: "DT01023434",
      name: "tuan",
      tp1: 9,
      tp2: 7,
      tp3: 3,
      kthp: 7,
      evaluate: "DAT",
    },
    {
      id: "DT01023435",
      name: "tuan",
      tp1: 9,
      tp2: 7,
      tp3: 3,
      kthp: 7,
      evaluate: "DAT",
    },
    {
      id: "DT01023436",
      name: "tuan",
      tp1: 9,
      tp2: 7,
      tp3: 3,
      kthp: 7,
      evaluate: "DAT",
    },
    {
      id: "DT01023437",
      name: "tuan",
      tp1: 9,
      tp2: 7,
      tp3: 3,
      kthp: 7,
      evaluate: "DAT",
    },
    {
      id: "DT01023438",
      name: "tuan",
      tp1: 9,
      tp2: 7,
      tp3: 3,
      kthp: 7,
      evaluate: "DAT",
    },
    {
      id: "DT01023439",
      name: "tuan",
      tp1: 9,
      tp2: 7,
      tp3: 3,
      kthp: 7,
      evaluate: "DAT",
    },
    {
      id: "DT01023430",
      name: "tuan",
      tp1: 9,
      tp2: 7,
      tp3: 3,
      kthp: 7,
      evaluate: "DAT",
    },
  ];
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    { title: "Name", dataIndex: "name", id: "name" },
    { title: "TP1", dataIndex: "tp1", id: "tp1" },
    { title: "TP2", dataIndex: "tp2", id: "tp2" },
    { title: "TP3", dataIndex: "tp3", id: "tp3" },
    { title: "KTHP", dataIndex: "kthp", id: "KTHP" },
    {
      title: "evaluate",
      dataIndex: "evaluate",
      id: "evaluate",
    },
    {
      render: () => {
        return (
          <>
            <Button type="danger">Delete</Button>
            <Button type="primary">
              <ModalClassA />
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Card>
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </>
  );
};

export default ClassA;
