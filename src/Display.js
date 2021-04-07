import React from 'react';
import axios from 'axios';
import AddGenre from './AddGenre';
import { withAuth0 } from '@auth0/auth0-react';
import Movie from './Movie';
import './style.css';


const API_SERVER = process.env.REACT_APP_SERVER;

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      genre: '',
      title: '',
      description: '',
      releaseDate: '',
      src: ''

    }
  }

  componentDidMount = async () => {
    console.log('component did mount');
    let getUserInfo = await axios.get(`${API_SERVER}/user`, {email: this.props.auth0.user.email});
    //add genre to state
    if (getUserInfo.data === 'user not in db') {
      axios.post(`${API_SERVER}/user`, {email: this.props.auth0.user.email, name: this.props.auth0.user.name});
    }
    console.log('getting user info', getUserInfo);
  }

  getMovies = async () => {
    console.log('genre', this.state.genre)
    if (this.state.genre.length < 1 || this.state.genre === 'Remove Genre'){
      console.log('no genre');
      const movieNoGenre = await axios.get(`${API_SERVER}/movies`, {email: this.props.auth0.user.email})
      console.log('movies without genre', movieNoGenre);
      this.setState ({ movie: movieNoGenre.data, title: movieNoGenre.data.original_title, description: movieNoGenre.data.overview, releaseDate: movieNoGenre.data.release_date, src: movieNoGenre.data.poster_path});
      // console.log('finding data', movieNoGenre.data.original_title);
    } else {
      console.log('theres movies');
      const movieWithGenre = await axios.get(`${API_SERVER}/movies/${this.state.genre}`, {email: this.props.auth0.user.email})
      console.log('movie with genre', movieWithGenre);
      this.setState ({ movie: movieWithGenre.data, title: movieWithGenre.data.original_title, description: movieWithGenre.data.overview, releaseDate: movieWithGenre.data.release_date, src: movieWithGenre.data.poster_path});
    }
    // if genre is '', get random movie user /movies route
    // else genre, the get /movies/genre, pass in genre into function
    // gets movies
  }

  updateStateGenre = (e) => {
    console.log('testing', e.target.value);
    this.setState({ genre: e.target.value });
    // console.log('genre', this.state.genre);
    // updating the state of genre/onchange
  }

  updateGenre = async (e) => {
    if (this.state.genre === 'Remove Genre'){
      console.log('removing genre', this.props.auth0.user.email);
      await axios.delete(`${API_SERVER}/user`, { data: {email: this.props.auth0.user.email}})
    } else {
      console.log(this.state.genre);
    let newMovie = await axios.put(`${API_SERVER}/user/${this.state.genre}`, {email: this.props.auth0.user.email})
    this.setState ({ movie: newMovie.data, title: newMovie.data.original_title, description: newMovie.data.overview, releaseDate: newMovie.data.release_date, src: newMovie.data.poster_path });
    }
  }

  render() {
    return (
      <div className="movieDisplay">
        <p>You are logged in</p>
        <Movie 
        getMovies={this.getMovies}
        movie={this.state.movie}
        title={this.state.title}
        description={this.state.description}
        src={this.state.src}
        releaseDate={this.state.releaseDate}
        />
        <AddGenre 
        updateStateGenre={this.updateStateGenre}
        updateGenre={this.updateGenre}
        getMovies={this.getMovies}/>
      </div>
    )
  }
}

export default withAuth0(Display);
