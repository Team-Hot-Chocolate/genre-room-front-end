import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

class Movie extends React.Component {
  render() {
    return (
      <center>
        <Container className="wholeMovie">
          <Row className="container">
            <Col className="img" xs={6} md={4}>
              <Image className="movImage" src={`https://www.themoviedb.org/t/p/original${this.props.src}`} thumbnail width="580" height="850"/>
            </Col>
              <Card className="card" thumbnail style={{ width: '22rem' }}>
                <Card.Title><h3>{this.props.title}</h3></Card.Title>
                {/* <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/original${this.props.src}`} /> */}
                <Card.Body>
                  <Card.Text>
                    <b>Release Date:</b><br></br>{this.props.releaseDate}<br></br>
                    <br></br>
                    <b>Rating:</b><br></br>{this.props.rating}<br></br>
                    <br></br>
                    <b>Summary:</b><br></br>{this.props.description}<br></br>
                  </Card.Text>
                </Card.Body>
              </Card>
          </Row>
        </Container>
      </center>
    )
  }
}

export default Movie;