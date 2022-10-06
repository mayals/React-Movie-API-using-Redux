import React, { useState, useEffect } from 'react'
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'



const MovieDetailsComp = () => {
    const Allparams = useParams();
    console.log(Allparams)
    const [movie, setMovie] = useState([])

    //get  movie by details 
    const getMovieDetails = async () => {
        const Response = await axios.get(`https://api.themoviedb.org/3/movie/${Allparams.id}?api_key=1be51e18a1e40908e04cb7ea3bc521f9&language=en-US`)
        setMovie(Response.data)
    }



    useEffect(() => {
        getMovieDetails();
    }, [])



    return (
        <div>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4 ">
                    <div className="card-detalis  d-flex align-items-center ">
                        <img
                            className="img-movie w-30"
                            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                            alt={movie.title}
                        />
                        <div className="justify-content-center text-center  mx-auto">
                            <p className="card-text-details border-bottom">
                                Movie Title : {movie.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                Movie Date:{movie.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                Movie Reviews Counter : {movie.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                Movie Average :{movie.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>


            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end p-4 ">
                            <p className="card-text-title border-bottom">The Movie Story:</p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>


            <Row className="justify-content-center">
                <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className="mt-2 d-flex justify-content-center ">
                    
                        <Link to="/">
                            <button
                                style={{ backgroundColor: "#d9251c", border: "none" }}
                                className="btn btn-primary mx-2">
                                Home Page
                            </button>
                        </Link>

                        <a href={movie.homepage} >
                            <button
                                style={{ backgroundColor: "#d9251c", border: "none" }}
                                className="btn btn-primary">
                                Movie Display 
                            </button>
                        </a>

                </Col>
            </Row>
        </div>
    )
}

export default MovieDetailsComp