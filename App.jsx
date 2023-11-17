import { useEffect, useRef, useState } from 'react'
import axios from "axios";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from "@chakra-ui/react";
import Tables from './components/Tables'
import Login from './components/Register'
import Register from './components/Login'
import { Button, ButtonGroup } from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [active, setActive] = useState(false);
  const [register, setRegister] = useState(0);
  const [rname, setRName] = useState("");
  const [rpass, setRPass] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false);
  const nahid = useRef();

  useEffect(() => {
    axios
      .get("https://6556258684b36e3a431f3560.mockapi.io/products/users")
      .then((res) => {
        setUsers(res.data);
      });
  }, []);
  console.log(active);
  useEffect(() => {
    axios
      .get("https://6556258684b36e3a431f3560.mockapi.io/products/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <ChakraProvider>
        <>
        <Login useRef={useRef} useEffect={useEffect} setAdmin={setAdmin} setEmail={setEmail} setPass={setPass}/>
        <Register/>
     <Tables />
   
    
   
    </>
    </ChakraProvider>
  
  )
}

export default App