import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class GenreForm extends React.Component {
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
              <option value="Comedy">Comedy</option>
              <option value="Action">Action</option>
              <option value="Horror">Horror</option>
              <option value="Remove Genre">Remove Genre</option>
            </Form.Control>
          </Col>
          <Col xs="auto" className="my-1">
            <Form.Check
              type="checkbox"
              id="customControlAutosizing"
              label="Remember my preference"
              custom
            />
          </Col>
          <Col xs="auto" className="my-1">
            <Button type="submit" onClick={this.props.updateGenre}>Submit</Button>
          </Col>
        </Form.Row>
      </Form>
    )
  }
}

export default GenreForm;