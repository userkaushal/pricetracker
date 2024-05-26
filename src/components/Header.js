import React from 'react'
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Nlogo from "../assets/Nlogo.jpg";
import "../components/Header.css";

function Header() {
  return (
    <div>

    <Navbar className="bg-body-tertiary nav">
        <Container>
          <Navbar.Brand href="#home" style={{textDecoration: "none", color: "black", fontSize: "1.3rem"}}>
            <img
              alt=""
              src={Nlogo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Price Tracker
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header