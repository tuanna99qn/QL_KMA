import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Login = () => {
  const [username, setUseName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()
  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      history.push("/dashboard")
    }
  }
  )
  async function login (){
    try {
      let item = {username,password}
      console.log(item)
      let res = await axios('http://171.244.141.137/auth/login',{
        method:'POST',
        headers:{
              "Content-Type":"application/json",
              "Accept":'application/json'
            },
          data:JSON.stringify(item)
      })
      res = await res.data
      localStorage.setItem("user",JSON.stringify(res))
      history.push('/dashboard')
    } catch (error) {
      console.log("er",error);
    }
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="username"
                        placeholder="Username"
                        onChange={(e)=>setUseName(e.target.value)}
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        {/* <Link to="/dashboard"> */}
                          <CButton color="primary" onClick = {login} className="px-4">
                            Login
                          </CButton>
                        {/* </Link> */}
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
