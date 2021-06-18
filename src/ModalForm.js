import {Button, Form, Modal} from 'react-bootstrap';
import React, {useState}from "react";
import "./App.css"

export default function Example() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({
        name: "",
        description: "",
        rate: "",
        imageLink: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        setMovies([movie, ...movies]);
        setMovie({
            name: "",
            description: "",
            rate: "",
            imageLink: "",
        });
    }

    function handleNameChange(e) {
        setMovie({...movie, name: e.target.value});
    }

    function handleDescriptionChange(e) {
        setMovie({...movie, description: e.target.value});
    }

    function handleRateChange(e) {
        setMovie({...movie, rate: parseInt(e.target.value)});
    }

    function handleImageLinkChange(e) {
        setMovie({...movie, imageLink: e.target.value});
    }



    return (
        <>
            <Button variant="primary" id="button" className='btn-lg add' onClick={handleShow}>
                Add a movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={movie.name}
                            placeholder="movie name"
                            onChange={handleNameChange}
                        />
                        <br/><br/>
                        <textarea className="descpbox"
                                  type="text"
                                  value={movie.description}
                                  placeholder="movie description"
                                  onChange={handleDescriptionChange}
                        />
                        <br/><br/>
                        <input
                            type="text"
                            value={movie.rate}
                            placeholder="movie rate"
                            onChange={handleRateChange}
                        />
                        <br/><br/>
                        <input
                            type="text"
                            value={movie.imageLink}
                            placeholder="image link"
                            onChange={handleImageLinkChange}
                        />
                        <br/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

