import React from "react";
import { Button, Table, Card, Select, Collapse } from "antd";
import Modal from "./modal";
const { Option } = Select;
const { Panel } = Collapse;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
const ManagerUsers = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const dataClass = [
    { class: "classA", dataIndex: "classa", id: "DT010234" },
    { class: "classA", dataIndex: "classa", id: "DT010235" },
    { class: "classA", dataIndex: "classa", id: "DT010236" },
    { class: "classA", dataIndex: "classa", id: "DT010237" },
    { class: "classA", dataIndex: "classa", id: "DT010234" },
    { class: "classA", dataIndex: "classa", id: "DT010234" },
    { class: "classA", dataIndex: "classa", id: "DT010235" },
    { class: "classA", dataIndex: "classa", id: "DT010235" },
    { class: "classA", dataIndex: "classa", id: "DT010236" },
    { class: "classA", dataIndex: "classa", id: "DT010237" },
  ];

  const dataSource = [
    {
      id: "DT010234",
      name: "TEACHER TUAN1",
      accound: "tuanqn1999@gmail.com",
      password: "cuccut123",
    },
    {
      id: "DT010235",
      name: "TEACHER TUAN2",
      accound: "tuanqn1999@gmail.com",
      password: "cuccut123",
    },
    {
      id: "DT010236",
      name: "TEACHER TUAN3",
      accound: "tuanqn1999@gmail.com",
      password: "cuccut123",
    },
    {
      id: "DT010237",
      name: "TEACHER TUAN4",
      accound: "tuanqn1999@gmail.com",
      password: "cuccut123",
    },
  ];
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    { title: "Name", dataIndex: "name", id: "name" },
    { title: "accound", dataIndex: "accound", id: "accound" },
    { title: "password", dataIndex: "password", id: "password" },
    // {
    //   render: () => {
    //     return (
    //       <>
    //         <Button type="danger">Delete</Button>
    //         <Button type="primary">Edit</Button>
    //         <Select
    //           mode="multiple"
    //           allowClear
    //           style={{ width: "100%" }}
    //           placeholder="Please select"
    //           defaultValue={["a10", "c12"]}
    //           onChange={handleChange}
    //         >
    //           {children}
    //         </Select>
    //       </>
    //     );
    //   },
    // },
  ];

  return (
    <>
      <Button>
        <Modal />
      </Button>
      <Card>
        {/* <Collapse>
          {dataSource.map((x) => {
            return (
              <Panel header={`Class ${x.name}`}>
                {dataClass.map((x) => {
                  return <Panel header={`Class ${x.class}`}>{x.class}</Panel>;
                })}
              </Panel>
            );
          })}
        </Collapse> */}
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </>
  );
};

export default ManagerUsers;
