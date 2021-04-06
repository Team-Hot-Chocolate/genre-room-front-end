import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


class AddGenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false

    }
  }

  displayModal = () => {
    this.setState({ displayModal: true });
  }

  closeModal = () => {
    this.setState({ displayModal: false });
  }

  render() {
    return (
      <>
      <Button onClick={this.displayModal}>Add Genre</Button>
      <Modal show={this.state.displayModal}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Add Genre</Modal.Title>
          </Modal.Header>

          <Modal.Body>
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
                  <Button type="submit" onClick={this.props.addGenre}>Submit</Button>
                </Col>
              </Form.Row>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
      </>
    )
  }
}

export default AddGenre;