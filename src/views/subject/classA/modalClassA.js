import { Modal, Select, Input } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React from "react";

const { Option } = Select;
const ModalClassA = () => {
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
        <FormItem label="ID">
          <Input required="aaaaaaaaaaaaaaa" />
        </FormItem>
        <FormItem label="name">
          <Input required="aaaaaaaaaaaaaaa" />
        </FormItem>
        <FormItem label="tp1">
          <Input required="aaaaaaaaaaaaaaa" />
        </FormItem>
        <FormItem label="tp2">
          <Input required="aaaaaaaaaaaaaaa" />
        </FormItem>
        <FormItem label="tp3">
          <Input required="aaaaaaaaaaaaaaa" />
        </FormItem>
        <FormItem label="kthp">
          <Input required="aaaaaaaaaaaaaaa" />
        </FormItem>
        <FormItem label="evaluate">
          <Input required="aaaaaaaaaaaaaaa" />
        </FormItem>
      </Modal>
    </>
  );
};
export default ModalClassA;
