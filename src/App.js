import React from "react";
import { useEffect } from "react";

import './App.css'

const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=12c4620b';

const movie = {
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
"Title": "Shrek",
"Type": "movie",
"Year": "2001",
"imdbID": "tt0126029"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(()=>{
        searchMovies('Shrek');
    },[]);

    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for Movies"
                    value="Spiderman"
                    onChange={()=>{}}
                />
                <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            <div className="container">
                <div>
                    <p>{movie.Year}</p>
                </div>
                <div>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
                </div>
                <div>
                    <span>{movie.Type}</span>
                    <h3>{movie.title}</h3>
                </div>
            </div>

        </div>
    );
}

//12c4620b

export default App;