import React, { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "./CartWidget";

export default function NavBar() {
    return (
     <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Nav.Link className="navbar-brand" href="/">Tienda Online</Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/categoria/camiseta">Camisetas</Nav.Link>
                            <Nav.Link href="/categoria/pantalon ">Pantalones</Nav.Link>
                            <Nav.Link href="/categoria/zapatilla">Zapatillas</Nav.Link>
                            <Nav.Link href="#link"><CartWidget /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
    </div>
    ) 
}

