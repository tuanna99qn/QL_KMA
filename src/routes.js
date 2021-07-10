import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const ClassA = React.lazy(() => import("./views/subject/classA"));
const ManagerUsers = React.lazy(() => import("./views/managerUser/index"));
const ManagerAccount = React.lazy(() => import("./views/managerAccount/index"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/subject", name: "Subject", exact: true },
  { path: "/subject/:id", name: "ClassA", component: ClassA },
  { path: "/manager", name: "ClassA", component: ManagerUsers },
  { path: "/managerccount", name: "ClassA", component: ManagerAccount },
];

export default routes;
