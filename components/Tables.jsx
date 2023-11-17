import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { ChakraProvider } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
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
  } from '@chakra-ui/react'
function Tablesecond() {
  let [data,setData]= useState([]);
  useEffect(() =>{
    axios.get(" https://northwind.vercel.app/api/products").then((res) => {
      console.log(res.data);
      setData(res.data)
    });
  },[])



  return (
    <TableContainer>
  <Table variant='striped' >
    <Thead>
      <Tr key={uuidv4()}>
        <Th>ID</Th>
        <Th>Name</Th>
        <Th>Price</Th>
        <Th>Stock Count</Th>
        <Th>Discontinued</Th>
        <Th>Edit</Th>
        <Th>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
      
      {data.map((element)=>{
        let stock = element.unitsInStock < 10 ? true : false;
        let unitPrice = element.unitPrice ? true : false;
        if(stock){

        }
        return (
          <Tr
          color={element.unitsInStock < 10 ? "red" : "black"}
          bg={element.discontinued ? "green" : "white"}
           key={uuidv4()}>
          <Td>{element.id}</Td>
          <Td>{element.name}</Td>
          <Td>{element.discontinued ? "true" : "false"}</Td>
          <Td>{element.unitsInStock}</Td>
          <Td>{element.unitPrice}</Td>
          <Td>
          <Button 
          colorScheme='yellow'>Edit</Button>
          </Td>
         
          <Td>   <Button 
          data-id={element.id}
          colorScheme='red'
          onClick={(e)=> {
            let arr = [...data];
            arr = arr.filter(
              (elem) => elem.id != e.target.getAttribute("data-id")
            );
            setData(arr);
            axios.delete(
              " https://northwind.vercel.app/api/products" + e.target.getAttribute("data-id")
            );
          }}
          >Delete
          </Button>
          </Td>
        </Tr>
        );
      })}
       </Tbody>
    </Table>
  </TableContainer>
      
        );
}
 
 
     
  

export default Tablesecond;