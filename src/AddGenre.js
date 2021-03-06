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
      <Button className="button" variant="danger" onClick={this.props.getMovies}>Get Recommendation</Button>
      <Button className="button" variant="danger" onClick={this.displayModal}>Update Genre</Button>
      <Modal show={this.state.displayModal}>
        <Modal.Dialog className="updateForm">
          <Modal.Header>
            <Modal.Title>Update Genre</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <GenreForm  
            updateStateGenre={this.props.updateStateGenre}
            updateGenre={this.props.updateGenre}
            closeModal={this.closeModal}/>
          </Modal.Body>

          <Modal.Footer>
            <Button className="logbutton" variant="secondary" onClick={this.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal>
      </>
    )
  }
}

export default AddGenre;