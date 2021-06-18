import React from 'react'
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function MovieCard({movie}) {
    return (
        <div className="container contMovie" >
            <div className="row justify-content-center" >
                <div className="col-3">
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant="top" src={movie.imageLink}/>
                        <Card.Body>
                            <Card.Title>{movie.name}</Card.Title>
                            <Card.Text>
                                {movie.description}
                            </Card.Text>
                            <div>{movie.rate}</div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}


export default MovieCard

