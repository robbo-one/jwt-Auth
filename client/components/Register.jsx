import React, { useState } from "react";
import { register, isAuthenticated } from "authenticare/client";

import { baseApiUrl as baseUrl } from "../config";
import { GridForm, ColOne, ColTwo, Button } from "./Styled";

function Register(props) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  //takes user name and password + base url defined in config file. goes to back end, adds to users database + issues token which means they are authenticated?
  function handleClick(e) {
    e.preventDefault();
    const { username, password } = form;
    register({ username, password }, { baseUrl }).then(() => {
      if (isAuthenticated()) {
        //promise that resolves to the decoded token
        props.history.push("/");
      }
    });
  }

  return (
    <>
      <h2>Register</h2>
      <GridForm>
        <ColOne htmlFor="username">Username:</ColOne>
        <ColTwo
          type="text"
          id="username"
          name="username"
          value={form.username}
          onChange={handleChange}
        />

        <ColOne htmlFor="password">Password:</ColOne>
        <ColTwo
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <Button type="button" onClick={handleClick}>
          Register
        </Button>
      </GridForm>
    </>
  );
}

export default Register;
