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
        <Container>
          <Row className="container">
            <Col className="img" xs={6} md={4}>
              <Image src={`https://www.themoviedb.org/t/p/original${this.props.src}`} thumbnail />
            </Col>
              <Card className="card" style={{ width: '18rem' }}>
                <Card.Title>{this.props.title}</Card.Title>
                {/* <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/original${this.props.src}`} /> */}
                <Card.Body>
                  <Card.Text>
                    {this.props.releaseDate}
                    {this.props.description}
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