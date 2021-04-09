import React from "react";
import {Navbar, Nav, NavDropdown, Dropdown, DropdownButton}  from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css"

const menu = ()=>{
    return(
        <Navbar  expand="lg" className="w-100" style={{backgroundColor:"#232F3E"}} >

            <Navbar.Collapse>
                <Nav>
                    <Nav.Item >
                        <DropdownButton title="Todas as categorias" variant="light" className="text-white"  >
                            <Dropdown.Item >Eletrónicas</Dropdown.Item>
                            <Dropdown.Item>Eletrónicas</Dropdown.Item>
                            <Dropdown.Item>Eletrónicas</Dropdown.Item>
                            <Dropdown.Item>Eletrónicas</Dropdown.Item>
                            <Dropdown.Item>Eletrónicas</Dropdown.Item>
                            <Dropdown.Item>Eletrónicas</Dropdown.Item>
                        </DropdownButton>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link style={{color:"white", marginLeft:"10px"}}>Lojas</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link style={{color:"white", marginLeft:"10px"}}>Produtos</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link style={{color:"white", marginLeft:"10px"}}>Devoluções</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link style={{color:"white", marginLeft:"10px"}}>Reversas</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default menu;