import {useEffect, useState} from "react";
import {getMovies} from "../../services/movies.service";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import img from './Logo.png'

import './MoviesList.css';

export  function MoviesList() {

    let [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies().then(value => setMovies([value.data.results]) );
    }, [])

    console.log(movies);
    console.log(movies.id)

    return (
        <div>
            <div className={"headerMoviesList"}>
                <img src={img} alt="logo"/>
                <input/>
                <button>search movies</button>

            </div>

            <div className={'movies'}>
                {
                    movies.map(value => <MoviesListCard item={value} key={value.id}/>)
                }
            </div>
        </div>
    );
}