import React, { useEffect, useState } from "react";
import { Modal, Select, Input } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { Button, Table, Card } from "antd";
//import Modal from "antd/lib/modal/Modal";
import axios from "axios";
import { GetClass } from "src/containers/_nav";


// reload 
export const handleClick = () => {
  window.location.reload()

}
const ClassA = (props) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState({});
  let [idDiem, setIdDiem] = useState([])
  const showModal = (id) => {

    setIdDiem = id
    console.log("id", setIdDiem)
    setVisible(true);
  };
const  deletePonit =  async (id)=>{
  try {
    //   document.addEventListener('click', handleClick)
    let req = await axios(`http://171.244.141.137/user-point/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json',
        'Authorization': `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWFkZXIiOnsiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifSwicGF5bG9hZCI6eyJkYXRhIjp7InVpZCI6IjYwZGFiZjI3NDY4N2M3NWQ5YzRkMjk0ZSIsInVzZXJUeXBlIjoidGVhY2hlciJ9LCJpYXQiOjE2MjUxNTYwMjYsImV4cCI6MTYyNTE1OTYyNn0sImlhdCI6MTYyNTY4MDY5N30.kQi6HS92EwkRDCuSGQnAtZIfI7SpuOBTey0lZbaHfTg"}`,
      }
    })

    return req
  } catch (error) {
    console.log("err", error);
  }
}
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
    updatePointSubject()
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  let classId = props.match.params.id;
  // day co id roi request api thoi
  let [subjectRoom, setSubjectRoom] = useState([])

  useEffect(() => {

    async function subject() {
      try {
        //   document.addEventListener('click', handleClick)
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
  // data
  const data = subjectRoom.map(row => ({ key: row._id, Name: row.user.userInfo.displayName, MSSV: row.user.userInfo.studentCode, TP1: row.TP1, TP2: row.TP2, THI: row.THI, TKHP: row.TKHP, evaluate: row.evaluate }));

  console.log("idDiem", idDiem)
  // update Ponit
  async function updatePointSubject() {
    try {
      //   document.addEventListener('click', handleClick)
      let req = await axios(`http://171.244.141.137/user-point/${idDiem}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "Accept": 'application/json',
          'Authorization': `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWFkZXIiOnsiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifSwicGF5bG9hZCI6eyJkYXRhIjp7InVpZCI6IjYwZGFiZjI3NDY4N2M3NWQ5YzRkMjk0ZSIsInVzZXJUeXBlIjoidGVhY2hlciJ9LCJpYXQiOjE2MjUxNTYwMjYsImV4cCI6MTYyNTE1OTYyNn0sImlhdCI6MTYyNTY4MDY5N30.kQi6HS92EwkRDCuSGQnAtZIfI7SpuOBTey0lZbaHfTg"}`,
        },
        data: {
          "evaluate": "KHONG DAT",
          "TP1": "1",
          "TP2": "9",
          "THI": "8",
          "TKHP": "10"
        }
      })

      return req
    } catch (error) {
      console.log("err", error);
    }
  }
  const initValue = { TP1: "", TP2: "", THI: "", TKHP: "", evaluate: "" }

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
      render: (e) => {
        const idPoint = e
        return (
          <>
            <Button type="danger" onClick={()=>deletePonit(idPoint.key)}>Delete</Button>
            <Button type="primary"   >
              <div onClick={() => showModal(setIdDiem(idPoint.key))}>Edit</div>
              <Modal
                title="Edit point of student"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
              >
                <FormItem label="Name">
                  <Input value="Ten" required="name" />
                </FormItem>
                <FormItem label="MSSV">
                  <Input value="MSSV" required="mssv" />
                </FormItem>
                <FormItem label="TP1">
                  <Input required="tp1" />
                </FormItem>
                <FormItem label="TP2">
                  <Input required="tp2" />
                </FormItem>
                <FormItem label="THI">
                  <Input required="thi" />
                </FormItem>
                <FormItem label="TKHP">
                  <Input required="tkhp
          " />
                </FormItem>
                <FormItem label="evaluate">
                  <Input required="evaluate" />
                </FormItem>
              </Modal>
            </Button >
          </>
        );
      },
    },
  ];
  return (
    <>
      <GetClass />
      <Card>
        <Table
          rowKey={data.key}
          dataSource={data}
          columns={columns} />
      </Card>
    </>
  )



};

export default ClassA;
