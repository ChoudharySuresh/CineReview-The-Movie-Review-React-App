import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../card/Card"
import "./MovieList.css"


const MovieList = ()=>{

    const [movieList, setMovieList] = useState([]);
    const {type} = useParams()

    useEffect(()=>{
        getData()

    }, [] )

    useEffect(()=>{
        getData()
    },[type])

    const getData = ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=950262e465c59c2f80e32c9bd6e32ae1&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results));
    }

    return(
        <div className="movie_List">
            <h2 className="listTitle">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="listCards">
                {
                    movieList.map(movie => (
                        <Card movie={movie}/>
                    ))
                }
            </div>
        </div>
    )
}
export default MovieList;