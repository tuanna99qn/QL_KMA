import { Modal, Select, Input } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React from "react";

const { Option } = Select;
const AdminManager = () => {
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
    { class: "classB", dataIndex: "classa", id: "2" },
    { class: "classC", dataIndex: "classa", id: "3" },
    { class: "classD", dataIndex: "classa", id: "4" },
    { class: "classE", dataIndex: "classa", id: "5" },
    { class: "classF", dataIndex: "classa", id: "6" },
    { class: "classG", dataIndex: "classa", id: "7" },
    { class: "classH", dataIndex: "classa", id: "8" },
    { class: "classI", dataIndex: "classa", id: "9" },
    { class: "classK", dataIndex: "classa", id: "10" },
  ];
  const teacherClass = [
    { name: "TEACHER TUAN1", id: "0" },
    { name: "TEACHER TUAN2", id: "0" },
    { name: "TEACHER TUAN3", id: "0" },
    { name: "TEACHER TUAN4", id: "0" },
    { name: "TEACHER TUAN5", id: "0" },
    { name: "TEACHER TUAN6", id: "0" },
  ];

  return (
    <>
      <div onClick={showModal}>Add</div>
      <Modal
        title="Add techers"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <FormItem label="ID">
          <Input required="aaaaaaaaaaaaaaa" type="text" />
        </FormItem>
        <FormItem label="name">
          <Input required="aaaaaaaaaaaaaaa" type="text" />
        </FormItem>
        <FormItem label="Accound">
          <Input required="aaaaaaaaaaaaaaa" type="text" />
        </FormItem>
        <FormItem label="Password">
          <Input required="aaaaaaaaaaaaaaa" type="password" />
        </FormItem>
      </Modal>
    </>
  );
};
export default AdminManager;
