import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

const AppNavbar = () => {

      return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to='/'>
                Throw Me A Bone!
              </Nav.Link>
                  <Nav.Link as={Link} to='/About'>
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} to='/Contact'>
                    Contact
                  </Nav.Link>

    </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

</>
  );
};

export default AppNavbar;          