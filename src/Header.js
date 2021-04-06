import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component{
  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Genre Room</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
            {this.props.auth0.isAuthenticated &&
            <LogoutButton />
            }
      </Navbar>
    )
  }
}

export default withAuth0(Header);