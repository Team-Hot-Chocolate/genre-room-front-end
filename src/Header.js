import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LogoutButton from './LogoutButton';
import { withAuth0 } from "@auth0/auth0-react";


class Header extends React.Component{
  render(){
    return(
      <Navbar className="bars" bg="black" variant="dark">
        <Navbar.Brand href="/" id='logo'>Genre Room</Navbar.Brand>
        <Nav className="ml-auto">
          
          {this.props.auth0.isAuthenticated && 
          <>
            <Nav.Link>
              <img src={this.props.auth0.user.picture} alt="user" id='header-user-image'/>
            </Nav.Link>
            <Nav.Link id='header-name'>{this.props.auth0.user.name}</Nav.Link>
            <LogoutButton />
          </>}
        </Nav>
      </Navbar>
    )
  }
}

export default withAuth0(Header);
