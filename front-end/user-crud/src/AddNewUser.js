import React,{useState} from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {axios} from 'axios'

function AddNewUser() {
    const [userInfo,setUserInfo]=useState({
fullname:'',
username:'',
email:'',
password:''
    })
    const handleChange=(e)=>{
if(e.target.name==='fullname'){
    setUserInfo({...userInfo, fullname:e.target.value})
}
if(e.target.name==='username'){
    setUserInfo({...userInfo, username:e.target.value})
}
if(e.target.name==='email'){
    setUserInfo({...userInfo, email:e.target.value})
}
if(e.target.name==='password'){
    setUserInfo({...userInfo, password:e.target.value})
}
    }
    const handleSubmit=()=>{
axios.post('http://localhost:3001/app/register', userInfo)
    }

    console.log(userInfo, 'userInfo')
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-sm-5">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="fullname">Full name</Label>
              <Input
              value={userInfo.fullname}
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full name" onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="username">User name</Label>
              <Input value={userInfo.username}
                type="text"
                name="username"
                id="username"
                placeholder="Username" 
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Email" value={userInfo.email} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input value={userInfo.password}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </FormGroup>
            <Button>Add new User</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddNewUser;
