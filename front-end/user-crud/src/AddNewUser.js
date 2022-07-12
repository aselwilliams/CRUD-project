import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function AddNewUser() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-5">
          <Form>
            <FormGroup>
              <Label for="fullname">Full name</Label>
              <Input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="username">User name</Label>
              <Input
                type="username"
                name="username"
                id="username"
                placeholder="Username"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
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
