import React from "react";
import { Col } from "react-bootstrap";
//import mov1 from '../images/mov1.jpg'
import { Link } from "react-router-dom"


const CardMovie = (props) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">

        <Link to={`/movie/${props.id}`}>
            <div className="card">
              {/* <img src={mov1} className="card__image" alt="hu" /> */}
              <img src={`https://image.tmdb.org/t/p/w500/`+props.poster_path} className="card__image" alt="hu" />
              <div className="card__overlay">
                <div className="overlay__text text-center w-100 p-2">
                      <p>name : "{props.title}"</p>
                      <p>date:"{props.release_date}"</p>
                      <p>reviews account :"{props.vote_count}"</p>
                      <p>review:"{props.vote_average}"</p>
                </div>
              </div>
            </div>
        </Link>

    </Col>
  );
};

export default CardMovie;