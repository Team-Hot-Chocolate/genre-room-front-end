import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import GenreForm from './GenreForm';

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
      <Button onClick={this.props.getMovies}>Get Recommendations</Button>
      <Button onClick={this.displayModal}>Update Genre</Button>
      <Modal show={this.state.displayModal}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Update Genre</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <GenreForm  
            updateStateGenre={this.props.updateStateGenre}
            updateGenre={this.props.updateGenre}/>
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