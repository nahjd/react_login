import React from 'react'
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { ChakraProvider } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";


const Register =( {
    setRName,
    setAdmin,
    setUsers,
    rname,
    rpass,
    email,
    nahid,
    setEmail,
    setRPass,
}) => {
    
  return (
    <>
      <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            value={rname}
            placeholder="Enter username"
            onChange={(e) => {
              setRName(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            value={rpass}
            placeholder="Enter password"
            onChange={(e) => {
              setRPass(e.target.value);
            }}
          />
          <br />
          <input
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            id="admin"
            ref={nahid}
            type="checkbox"
            onChange={(e) => {
              setAdmin(e.target.value);
            }}
          />
          <label> Is admin?</label>
          <br />
          <Button
            onClick={() => {
              let newUser = {
                username: rname,
                email: email,
                password: rpass,
                isAdmin: nahid.current.checked,
              };

              axios
                .post(
                  "https://6556162184b36e3a431efcfa.mockapi.io/api/users",
                  newUser
                )
                .then((res) => {
                  setUsers(res.data);
                });

              setRName("");
              setRPass("");
              setEmail("");
              setAdmin("");
              console.log((nahid.current.checked = false));
            }}
          >
            Sign in
          </Button>
        </form>
        <Button
          className="log-out"
          onClick={() => {
            setActive(true);
          }}
        >
          Log out
        </Button>
    </>
  )
}





export default Register;