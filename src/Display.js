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
    this.getMovies();
  }

  getMovies = async () => {
    console.log('getting movies');
    const getMovies = await axios.get(`${API_SERVER}/movies`, {email: this.props.auth0.user.email})
    // gets movies
  }

  updateStateGenre = (e) => {
    console.log('testing', e.target.value);
    this.setState({ genre: e.target.value });
    // updating the state of genre/onchange
  }

  updateGenre = async () => {
    if (this.state.genre === 'Remove Genre'){
      console.log('removing genre');
      await axios.delete(`${API_SERVER}/user`, {email: this.props.auth0.user.email})
    } else {
      console.log('adding genre');
    const genre = await axios.put(`${API_SERVER}/user/${this.state.genre}`, {email: this.props.auth0.user.email})
    }
    // updating the genre
  }

  render() {
    return (
      <>
        <p>You are logged in</p>
        <AddGenre 
        updateStateGenre={this.updateStateGenre}
        updateGenre={this.updateGenre}
        getMovies={this.getMovies}/>
      </>
    )
  }
}

export default withAuth0(Display);
