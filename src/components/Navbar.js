import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

const MyNavbar = () => (
    <BootstrapNavbar bg="dark" variant="dark">
        <BootstrapNavbar.Brand className='m-2' href="#home">LOGO</BootstrapNavbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="#goals">Metas</Nav.Link>
            <Nav.Link href="#tasks">Tareas</Nav.Link>
        </Nav>
    </BootstrapNavbar>
);

export default MyNavbar;
