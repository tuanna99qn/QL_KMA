import React, {useEffect, useState} from "react";
import { Button, Table, Card } from "antd";
import Modal from "antd/lib/modal/Modal";
import ModalClassA from "./modalClassA";
import axios from "axios";
import { GetClass } from "src/containers/_nav";
// import GetClass from "../../../containers/_nav"

const ClassA = () => {

  let [subjectRoom, setSubjectRoom] = useState([])

useEffect(()=>{
  async function subject (){
    try {
      let req = await axios('http://171.244.141.137/user-point',{
        method:'GET',
        headers:{
          "Content-Type":"application/json",
          "Accept":'application/json',
          'Authorization':`Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWFkZXIiOnsiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifSwicGF5bG9hZCI6eyJkYXRhIjp7InVpZCI6IjYwZGFiZjI3NDY4N2M3NWQ5YzRkMjk0ZSIsInVzZXJUeXBlIjoidGVhY2hlciJ9LCJpYXQiOjE2MjUxNTYwMjYsImV4cCI6MTYyNTE1OTYyNn0sImlhdCI6MTYyNTY4MDY5N30.kQi6HS92EwkRDCuSGQnAtZIfI7SpuOBTey0lZbaHfTg"}`,
        },
      })
      setSubjectRoom(req.data.data)
    
      return req
    } catch (error) {
      console.log("err",error);
    }
  }
  
  subject()
}, [])
console.log("subjectRoom",subjectRoom)


  const columns = [
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    { title: "subjectRoom", dataIndex: "subjectRoom", id: "subjectRoom" },
    { title: "TP1", dataIndex: "TP1", id: "tp1" },
    { title: "TP2", dataIndex: "TP2", id: "tp2" },
    { title: "THI", dataIndex: "THI", id: "thi" },
    { title: "TKHP", dataIndex: "TKHP", id: "TKHP" },
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
      <GetClass />
      <Card>
        <Table key={subjectRoom.id}
        dataSource={subjectRoom} 
        columns={columns} />
      </Card>
    </>
  );
};

export default ClassA;
