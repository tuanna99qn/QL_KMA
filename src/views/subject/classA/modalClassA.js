import { Modal, Select, Input } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React from "react";
import index from "./index"
const { Option } = Select;
const ModalClassA = (props) => {
  console.log("props",)
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  //   const [modalText, setModalText] = React.useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const dataClass = [
    { class: "classA", dataIndex: "classa", id: "0" },
    { class: "classA", dataIndex: "classa", id: "2" },
    { class: "classA", dataIndex: "classa", id: "3" },
    { class: "classA", dataIndex: "classa", id: "4" },
    { class: "classA", dataIndex: "classa", id: "5" },
    { class: "classA", dataIndex: "classa", id: "6" },
    { class: "classA", dataIndex: "classa", id: "7" },
    { class: "classA", dataIndex: "classa", id: "8" },
    { class: "classA", dataIndex: "classa", id: "9" },
    { class: "classA", dataIndex: "classa", id: "10" },
  ];

  return (
    <>
      <div onClick={showModal}>Edit</div>
      <Modal
        title="Edit point of student"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <FormItem label="Name">
          <Input required="name" />
        </FormItem>
        <FormItem label="MSSV">
          <Input required="mssv" />
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
    </>
  );
};
export default ModalClassA;
