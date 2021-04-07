import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class GenreForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {a: ''}
  }
  
  onSubmitAction = (e) => {
    e.preventDefault();
    this.props.updateGenre();
    this.props.closeModal();
  }

  render() {
    return (
      <Form >
        <Form.Row className="align-items-center">
          <Col xs="auto" className="my-1">
            <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
              Preference
                  </Form.Label>
            <Form.Control
              as="select"
              className="mr-sm-2"
              id="inlineFormCustomSelect"
              custom
              onChange={this.props.updateStateGenre}
            >
              <option value="0">Choose...</option>
              <option value="Remove Genre">Remove Genre</option>
              <option value="28">Action</option>
              <option value="12">Adventure</option>
              <option value="16">Animation</option>
              <option value="35">Comedy</option>
              <option value="80">Crime</option>
              <option value="99">Documentary</option>
              <option value="18">Drama</option>
              <option value="10751">Family</option>
              <option value="14">Fantasy</option>
              <option value="36">History</option>
              <option value="27">Horror</option>
              <option value="10402">Music</option>
              <option value="9648">Mystery</option>
              <option value="10749">Romance</option>
              <option value="878">Science Fiction</option>
              <option value="10770">TV Movie</option>
              <option value="53">Thriller</option>
              <option value="10752">War</option>
              <option value="37">Western</option>
            </Form.Control>
          </Col>
          <Col xs="auto" className="my-1">
            <Button type="submit" onClick={this.onSubmitAction}>Submit</Button>
          </Col>
        </Form.Row>
      </Form>
    )
  }
}

export default GenreForm;