import React from 'react';
import Header from './Header';
import Login from './Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Display from './Display';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';
import Footer from './Footer';


class App extends React.Component {
  render(){
    return(
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              {!this.props.auth0.isAuthenticated ?
              <Login /> :
              <Display />
              }
            </Route>
            <Route exact path="/profile">
              {this.props.auth0.isAuthenticated &&
              <Profile />
              }
            </Route>
          </Switch>
        </Router>
        <Footer />
      </>
    )
  }
}

export default withAuth0(App);
