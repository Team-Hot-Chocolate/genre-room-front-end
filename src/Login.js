import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import LoginButton from './LoginButton';

class Login extends React.Component {
  render() {
    return(
      <>
        <center>
          <Card className="login" style={{ width: '18rem', height: '12rem' }}>
            <Card.Body>
              <br></br>
              <br></br>
              <LoginButton/>
            </Card.Body>
          </Card>
        </center>
      </>
    )
  }
}

export default Login;
