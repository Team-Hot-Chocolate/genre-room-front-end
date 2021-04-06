import React from 'react';
import axios from 'axios';
import AddGenre from './AddGenre';
import { withAuth0 } from '@auth0/auth0-react';


const API_SERVER = process.env.REACT_APP_SERVER;

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genre: ''

    }
  }

  componentDidMount = async () => {
    const getMovies = await axios.post(`${API_SERVER}/user`, {email: this.props.auth0.user.email})
    // getMovies when the page loads
  }

  updateStateGenre = (e) => {
    this.setState({ genre: e.target.value });
    // updating the state of genre/onchange
  }

  addGenre = async () => {
    console.log(this.state.genre);
    const genre = await axios.get(`${API_SERVER}/${this.state.genre}`, {email: this.props.auth0.user.email})
    // updating the genre
  }

  render() {
    return (
      <>
        <p>You are logged in</p>
        <AddGenre 
        updateStateGenre={this.updateStateGenre}
        addGenre={this.addGenre}/>
      </>
    )
  }
}

export default withAuth0(Display);
