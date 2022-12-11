import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiLogInCircle } from 'react-icons/bi';

const Navbars = () => {

  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="/gurianFood">გურული საჭმელები</Nav.Link>
            <Nav.Link href="/places">ადგილები</Nav.Link>
            <Nav.Link href="/Quiz">ქვიზი</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/AllWord">ალფაბიტის მიხედვით </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <a href='/SignUp'>
          <img src='https://cdn-icons-png.flaticon.com/512/2321/2321232.png' style={{width:'30px'}} /> </a>
  
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default Navbars;