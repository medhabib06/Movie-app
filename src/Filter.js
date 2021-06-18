import React from 'react';
import MovieCard from "./MovieCard";


function Filter({movies}) {

    let moviesArray = movies.map((movie) => (
        <MovieCard movie={movie}/>));

    function compare(a, b) {
        return (b.props.movie.rate) - (a.props.movie.rate);
    }



    //  console.log(moviesArray.map((movie)=>(movie.props.movie.rate)));
    // console.log(moviesArray);
    //  console.log(moviesArray.sort(compare));


    return (
        <div>
            <ul>
                {(moviesArray.sort(compare))}
            </ul>

        </div>
    );
};

export default Filter;