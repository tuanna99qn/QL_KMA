import React, { useEffect, useState } from "react";
import axios from "axios";
import {useGlobalState} from "../logical/glocalState";

export const GetClass = (props) => {
  let [dataClass, setDataClass] = useState([])
  useEffect(() => {
    async function getClass() {
      try {
        let req = await axios('http://171.244.141.137/subject/room', {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json',
            'Authorization': `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWFkZXIiOnsiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifSwicGF5bG9hZCI6eyJkYXRhIjp7InVpZCI6IjYwZGFiZjI3NDY4N2M3NWQ5YzRkMjk0ZSIsInVzZXJUeXBlIjoidGVhY2hlciJ9LCJpYXQiOjE2MjUxNTYwMjYsImV4cCI6MTYyNTE1OTYyNn0sImlhdCI6MTYyNTY4MDY5N30.kQi6HS92EwkRDCuSGQnAtZIfI7SpuOBTey0lZbaHfTg"}`,
          },
        })
        setDataClass(req.data.data)

        return req
      } catch (error) {
        console.log("err", error);
      }
    }
 // ham nay goi o dau day =)) ? cu get la se call duoc api a uk ok
    getClass()
  }, [])
//console.log("dataClass", dataClass)
  return <>

  </>

}

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "AdminManager",
    to: "/manager",
    icon: "cil-puzzle",
  },
  {
    _tag: "CSidebarNavItem",
    name: "ManagerAcount",
    to: "/managerccount",
    icon: "cil-puzzle",
  },
  {

    _tag: "CSidebarNavDropdown",
    name: "Subject",
    route: "/subject",
    icon: "cil-puzzle",
    // _children: [
    //   {
    //     _tag: "CSidebarNavItem",
    //     name: "ClassA",
    //     to: "/subject/classA",
    //   },
     
    // ],

  },
  // {
  //   _tag: "CSidebarNavDropdown",
  //   name: "Pages",
  //   route: "/pages",
  //   icon: "cil-star",
  //   _children: [
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Login",
  //       to: "/login",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Register",
  //       to: "/register",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Error 404",
  //       to: "/404",
  //     },
  //     {
  //       _tag: "CSidebarNavItem",
  //       name: "Error 500",
  //       to: "/500",
  //     },
  //   ],
  // },

];

export default _nav;

export  const mapToNav = (data)=>{
  let children =  data.map(m=>({
    _tag: "CSidebarNavItem",
    name: m.name,
    to: "/subject/"+m._id,
  }))
  let nav = [..._nav]
  nav.forEach(m=>{
    if (m.name != 'Subject'){
     // console.log("nsads",m.name)
      return
    }
    m._children = children
  })
  return nav
}
export const requestClass = async () => {
  try {
    let req = await axios('http://171.244.141.137/subject/room', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": 'application/json',
        'Authorization': `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoZWFkZXIiOnsiYWxnIjoiSFMyNTYiLCJ0eXAiOiJKV1QifSwicGF5bG9hZCI6eyJkYXRhIjp7InVpZCI6IjYwZGFiZjI3NDY4N2M3NWQ5YzRkMjk0ZSIsInVzZXJUeXBlIjoidGVhY2hlciJ9LCJpYXQiOjE2MjUxNTYwMjYsImV4cCI6MTYyNTE1OTYyNn0sImlhdCI6MTYyNTY4MDY5N30.kQi6HS92EwkRDCuSGQnAtZIfI7SpuOBTey0lZbaHfTg"}`,
      },
    })
 //   console.log("data class ae vao ma xem",req.data)
    return req.data
  } catch (error) {
    console.log("err", error);
  }
}
