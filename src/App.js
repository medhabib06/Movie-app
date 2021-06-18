import "./App.css";
import Filter from "./Filter";
import React, {useState} from "react";
import {Button, Form, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from "./MovieList";


function App() {
    const [sortRate, setSort] = useState(true)
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
        if (movie.description != "" && movie.name != "" && movie.imageLink != "" &&  movie.rate != "") {
            if (movie.rate <= 10 && movie.rate >= 0) {
                setMovies([movie, ...movies]);
                setMovie({
                    name: "",
                    description: "",
                    rate: "",
                    imageLink: "",
                });
            } else alert("The rate must be between 0 and 10");
        } else alert("Something is missing")
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


    function sortByRate() {
        setSort(!sortRate);
    }


    console.log(sortRate);

    return (
        <div className="App">

            <div className="title">Movies</div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Button variant="primary" id="button" className='btn-lg add' onClick={handleShow}>
                            Add a movie
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className="modalTitle">Add a movie</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <input
                                        type="text"
                                        value={movie.name}
                                        placeholder="movie name"
                                        onChange={handleNameChange}
                                    />
                                    <br/><br/>
                                    <textarea className="descBox"
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
                                        type="url"
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
                                <Button variant="primary" onClick={handleSubmit}>
                                    Add
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <div className="col-9 d-flex justify-content-end">
                        <Button onClick={sortByRate} id="buttonSortByRate"
                                className='btn-dark btn-lg btn-secondary add'>Sort by
                            rate</Button>
                    </div>
                </div>
            </div>
            {sortRate === true && <MovieList movies={movies}/>}
            {sortRate === false && <Filter movies={movies}/>}
        </div>
    );
}

export default App;
