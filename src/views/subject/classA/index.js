import React, {useState} from "react";
import { Button, Table, Card } from "antd";
import Modal from "antd/lib/modal/Modal";
import ModalClassA from "./modalClassA";
import axios from "axios";

const ClassA = () => {

  let [subjectRoom, setSubjectRoom] = useState({ hits: [] })
  const [user, setUser] = useState("")
  const [evaluate, setEvaluate] = useState("")
  const [tp1, setTp1] = useState("")
  const [tp2, setTp2] = useState("")
  const [thi, setThi] = useState("")
  const [TKHP, setTKHP] = useState("")

  async function subject (){
    try {
      let res = await axios('http://171.244.141.137/user-point',{
        method:'GET',
        headers:{
          "Content-Type":"application/json",
          "Accept":'application/json',
          'Authorization':`Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWFkZXIiOnsiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifSwicGF5bG9hZCI6eyJkYXRhIjp7InVpZCI6IjYwZGFiZjI3NDY4N2M3NWQ5YzRkMjk0ZSIsInVzZXJUeXBlIjoidGVhY2hlciJ9LCJpYXQiOjE2MjUxNTYwMjYsImV4cCI6MTYyNTE1OTYyNn0sImlhdCI6MTYyNTY4MDY5N30.kQi6HS92EwkRDCuSGQnAtZIfI7SpuOBTey0lZbaHfTg"}`,
        },
      })
      res = await res.data

      setSubjectRoom = res.data[0].subjectRoom
      console.log("res",setSubjectRoom)
    } catch (error) {
      console.log("err",error);
    }
  }

  subject()
  const dataSource = [
    {
      id: `${setSubjectRoom}`,
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
