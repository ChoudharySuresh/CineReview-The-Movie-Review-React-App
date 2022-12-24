import React, { useEffect, useState } from "react"
import Skeleton  , { SkeletonTheme } from "react-loading-skeleton"
import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({movie})=>{
    const [isLoading , setLoading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },1500)
    }, [])

    return(
        <>
        {
            isLoading 
            ?
            <div className="cards">
                <SkeletonTheme color="#202020" highlightColor="#444" >
                    <Skeleton height={300} duration={2}></Skeleton>
                </SkeletonTheme>
            </div>
            :
            <Link to={`/movie/${movie.id}`} style={{textDecoration:"none" , color:"white"}}>
                <div className="card">
                    <img className="cardImg" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path:""}`}></img>
                    <div className="cardOverlay">
                        <div className="cardTitle"> {movie ? movie.original_title : ""} </div>
                        <div className="cardRuntime">
                            {movie ? movie.release_date:""}
                            <span className="cardRating">
                                {movie ? movie.vote_average:""}
                                <i className="fas fa-star"/>
                            </span>
                        </div>
                        <div className="cardDescription"> {movie ? movie.overview.slice(0,118)+"..." :""}</div>
                    </div>
                </div>
                
            </Link>
        }
        </>
    )
} 

export default Card;