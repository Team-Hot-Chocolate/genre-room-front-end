import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return(
      <Navbar className="bars" collapseOnSelect expand="lg" bg="black" variant="dark">
      <Navbar.Brand id="cruddy">&copy; CRUDdy PRODUCTIONS</Navbar.Brand>
    </Navbar>
    )
  }
}

export default Footer;
