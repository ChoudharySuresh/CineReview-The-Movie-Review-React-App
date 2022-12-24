import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Movie.css"


const Movie = () => {
    const[currentMovieDetail , setMovieDetail] = useState();

    const {id} = useParams()

    useEffect(()=>{
        getData();
        window.scroll(0,0)
    },[])

    const getData = ()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=950262e465c59c2f80e32c9bd6e32ae1&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieDetail(data));
    }

    return (
        <div className='Detail'>
            <div className='movie_Banner'>
                <img className='movie_Backdrop' src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path:""}`}></img>
            </div>

            <div className='movie_Detail'>
                <div className='movie_LeftDetail'>
                    <div className='poster_Box'>
                        <img className='poster_Img' src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path:""}`}></img>
                    </div>
                </div>
                <div className='movie_RightDetail'>
                    <div className='movie_RightTop'>
                        <div className='movie_Name'> {currentMovieDetail ? currentMovieDetail.original_title :""} </div>
                        <div className='movie_Tagline'>{currentMovieDetail ? currentMovieDetail.tagline:""} </div>
                        <div className='movie_Rating'>
                            {currentMovieDetail ? currentMovieDetail.vote_average:""}<i className="fas fa-star"/>
                            <span className='movie_VoteCount'>{currentMovieDetail ? "(" + currentMovieDetail.vote_count+" ) votes":""} </span>  
                        </div>
                        <div className='movie_Runtime'>{currentMovieDetail ? currentMovieDetail.runtime +"mins" :""}</div>
                        <div className='movie_ReleseDate'> {currentMovieDetail ? "Release Date : " + currentMovieDetail.release_date :""}</div>
                        <div className='movie_Genres'>
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ?
                                currentMovieDetail.genres.map(genre =>(
                                    <><span className='movie_Genre' id={genre.id}>{genre.name}</span></>
                                ))
                                :
                                ""
                            }
                        </div>
                    </div>
                    <div className='movie_RightBottom'>
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                </div>
            </div> 


            <div className='movie_Links'>
                <div className='movie_Heading'>UseFull Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="moviehomeButton movieButton">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movieimdbButton movieButton">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div> 

            <div className='movie_Heading'>Production Companies</div>
            <div className='movie_Production'>
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company =>(
                        <>
                        {
                            company.logo_path
                            &&
                            <span className='production_CompanyImage'>
                              <img className='production_Company' src={"https://image.tmdb.org/t/p/original"+company.logo_path}></img>  
                              <span>{company.name}</span>
                            </span>
                        }
                        </>
                    ))
                }
            </div>          
        </div>
    )
}

export default Movie
