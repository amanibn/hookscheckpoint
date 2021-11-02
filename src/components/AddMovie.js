import React, {useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { v4 as uuidv4 } from "uuid";
        const AddMovie = (props) => {
const [show, setShow] = useState(false);
        const handleShow = () => setShow(true);
        const [title, setTitle] = useState('');
        const [posterURL, setPosterURL] = useState('');
        const [description, setDescription] = useState('');
        const [rating, setRating] = useState('');
        const handelSubmit = event => {
        event.preventDefault();
        setShow(false)
                var newMovie = {
                        id: uuidv4(),
                        title:title,
                        description:description,
                        posterURL:posterURL,
                        rating:rating

                }
        console.log(newMovie)
                props.addMovie(newMovie)
        }

return (
        <>
<div className="addButton">
    <Button variant="primary" onClick={handleShow}>
       Add new movie
    </Button>
</div>
<Modal show={show}>
    <Modal.Header closeButton>
        <Modal.Title>New movie</Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <form >
            <div className="form-group">
                <label>Title</label>
                <input onChange={ (event) => setTitle(event.target.value) } type="text" className="form-control" required="" value={title} />
            </div>
            <div className="form-group">
                <label>Poster URL</label>
                <input onChange={ (event) => setPosterURL(event.target.value) } type="text" className="form-control" required="" value={posterURL} />
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" onChange={ (event) => setDescription(event.target.value) } value={description}></textarea>
            </div>
            <div className="form-group">
                <label>Rating</label>
                <input onChange={ (event) => setRating(event.target.value) } type="text" className="form-control" required="" value={rating} />
            </div>
        </form>

    </Modal.Body>
    <Modal.Footer>
        <button className='btn btn-primary' type='submit' onClick={handelSubmit}>Add Movie</button>
    </Modal.Footer>
</Modal>
</>
  );
};

export default AddMovie;