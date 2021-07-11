import React, {useEffect, useState} from "react";
import {Button, Table, Card} from "antd";
import Modal from "antd/lib/modal/Modal";
import ModalClassA from "./modalClassA";
import axios from "axios";
import {GetClass} from "src/containers/_nav";
// import GetClass from "../../../containers/_nav"

const ClassA = (props) => {

  let classId = props.match.params.id;
  console.log("classId", classId)
  // day co id roi request api thoi
  let [subjectRoom, setSubjectRoom] = useState([])

  useEffect(() => {
    async function subject() {
      try {
        let req = await axios(`http://171.244.141.137/user-point/${classId}`, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json',
            'Authorization': `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWFkZXIiOnsiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifSwicGF5bG9hZCI6eyJkYXRhIjp7InVpZCI6IjYwZGFiZjI3NDY4N2M3NWQ5YzRkMjk0ZSIsInVzZXJUeXBlIjoidGVhY2hlciJ9LCJpYXQiOjE2MjUxNTYwMjYsImV4cCI6MTYyNTE1OTYyNn0sImlhdCI6MTYyNTY4MDY5N30.kQi6HS92EwkRDCuSGQnAtZIfI7SpuOBTey0lZbaHfTg"}`,
          },
        })
        setSubjectRoom(req.data.data)
        
        return req
      } catch (error) {
        console.log("err", error);
      }
    }

    subject()
  }, [])
 console.log("subjectRoom", subjectRoom)

 const data = subjectRoom.map(row => ({ key:row._id, Name: row.user.userInfo.displayName, MSSV:row.user.userInfo.studentCode, TP1: row.TP1, TP2: row.TP2, THI:row.THI, TKHP: row.TKHP, evaluate:row.evaluate}));


  console.log("data",data)
const columns = [
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'name',
  },
  {
    title: 'MSSV',
    dataIndex: 'MSSV',
    key: 'mssv',
  },
  {
    title: 'TP1',
    dataIndex: 'TP1',
    key: 'tp1',
  },
  {
    title: 'TP2',
    dataIndex: 'TP2',
    key: 'tp2',
  },
  {
    title: 'THI',
    dataIndex: 'THI',
    key: 'tp1',
  },
 
  {
    title: 'TKHP',
    dataIndex: 'TKHP',
    key: 'tkhp',
  },
  {
    title: 'evaluate',
    dataIndex: 'evaluate',
    key: 'evaluate',
  },
  {
    render: () => {
      return (
        <>
          <Button type="danger">Delete</Button>
          <Button type="primary">
            <ModalClassA/>
          </Button>
        </>
      );
    },
  },
];
return (
<>
  <GetClass/>
  <Card>
    <Table 
      key = {data.key}
           dataSource={data}
           columns={columns}/>
  </Card>
</>
)



};

export default ClassA;
