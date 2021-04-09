import React from "react";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css"

import {Nav, Container, Row, Navbar, InputGroup, FormControl, Button, DropdownButton, Dropdown} from "react-bootstrap"

import Menu2 from "./menu";
import Apresentacao from "./apresentacao";



export default function Menu(){
    return(

        <Row>
            <Navbar  bg="light" expand="lg" className="w-100" sticky="top">
                <Navbar.Brand href="/Componentes/NavBar/#">
                    <h2 className="pl-2">YouLoJa</h2>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>

                <Nav fill as="ul" className="pl-5 " defaultActiveKey="/Home">
                <Nav.Item as="li" >
                    <Nav.Link className="text-dark ml-3" href="/Home">Entregas em Angola</Nav.Link>
                </Nav.Item>


                <Nav.Item as="li" className="ml-3 pl-3">
                    
                            <InputGroup style={{width:"700px"}} size="md">
                                <InputGroup.Prepend>
                                     <DropdownButton title="Todos" variant="light">
                                         <Dropdown.Item>Eletronicos</Dropdown.Item>
                                         <Dropdown.Item>Eletronicos</Dropdown.Item>
                                         <Dropdown.Item>Eletronicos</Dropdown.Item>
                                     </DropdownButton>
                                </InputGroup.Prepend>
                                <FormControl placeholder="pesquisar produtos" >

                                </FormControl>
                                <InputGroup.Append>
                                        <InputGroup.Text>pesquisar</InputGroup.Text>
                                </InputGroup.Append>
                            
                            </InputGroup>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link className="text-dark ml-5  bg-light rounded border">Conta</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link className="text-dark ml-3 bg-light rounded border">Carrinho __</Nav.Link>
                </Nav.Item>
            </Nav>
                </Navbar.Collapse>
            </Navbar> 

            <Menu2 />
            <Apresentacao />          
        </Row>
    )
}


