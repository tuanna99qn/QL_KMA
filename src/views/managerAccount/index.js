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
      subject: "Math",
      class: [
        { class: "classA", dataIndex: "classa", id: "0" },
        { class: "classA", dataIndex: "classa", id: "2" },
        { class: "classA", dataIndex: "classa", id: "3" },
      ],
    },
    {
      id: "DT010235",
      name: "TEACHER TUAN2",
      subject: "physic",
      class: [
        { class: "classA", dataIndex: "classa", id: "0" },
        { class: "classA", dataIndex: "classa", id: "2" },
        { class: "classA", dataIndex: "classa", id: "3" },
      ],
    },
    {
      id: "DT010236",
      name: "TEACHER TUAN3",
      subject: "Music",
      class: [
        { class: "classA", dataIndex: "classa", id: "0" },
        { class: "classA", dataIndex: "classa", id: "2" },
        { class: "classA", dataIndex: "classa", id: "3" },
      ],
    },
    {
      id: "DT010237",
      name: "TEACHER TUAN4",
      subject: "Art",
      class: [
        { class: "classA", dataIndex: "classa", id: "0" },
        { class: "classA", dataIndex: "classa", id: "2" },
        { class: "classA", dataIndex: "classa", id: "3" },
      ],
    },
  ];
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    { title: "Name Teacher", dataIndex: "name", id: "name" },
    { title: "Subject", dataIndex: "subject", id: "subject" },
    // { title: "Class", dataIndex: "class", id: "class" },
    {
      title: "Class",
      dataIndex: "class",
      render: (data) => (
        <>
          {data.map((x) => {
            return <p>{x.class}</p>;
          })}
        </>
      ),
    },
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
