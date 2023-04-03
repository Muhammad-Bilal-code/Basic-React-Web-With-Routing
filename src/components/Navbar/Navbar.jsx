import "./navbar.css"
import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"

const MyNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand ><Link to="/">Navbar</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/about">About</Link></Nav.Link>
            <Nav.Link ><Link to="/gallery">Gallery</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     

     
    </>
  )
}

export default MyNavbar
