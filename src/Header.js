import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component{
  render(){
    return(
      <Navbar className="bars" bg="black" variant="dark">
        <Navbar.Brand href="/home">Genre Room</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          {this.props.auth0.isAuthenticated &&
          <LogoutButton />
          }
        </Nav>
      </Navbar>
    )
  }
}

export default withAuth0(Header);