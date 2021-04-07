import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

class Movie extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/original${this.props.src}`} />
        <Card.Body>
          <Card.Text>
            {this.props.releaseDate}
            {this.props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default Movie;