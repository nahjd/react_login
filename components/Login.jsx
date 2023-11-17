import React from 'react'
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { ChakraProvider } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
const Login = ( {
    setName,
    name,
    pass,
    setPass,
}) => {
  return (
    <>
     <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              type="text"
              placeholder="Enter username"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <Input
              type="password"
              placeholder="Enter password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <Button
              onClick={() => {
                let newUser = users.find((user) => {
                  return user.username == name && user.password == pass;
                });

                {
                  newUser ? setActive(!active) : console.log("salam");
                }
              }}
            >
              Log in
            </Button>
            <p>
              Do you acount?
              <span className="register" onClick={() => {}}>
                Sign in
              </span>
            </p>
          </form>
    </>
  )
}

export default Login;

