import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationCompo from "./PaginationCompo.js"
import { useSelector , useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import {getallMoviesAction} from "../redux/actions/movieAction.js"



const MoviesList = () => {
        const [MoviesState,setMoviesState]=useState([]);
        const dispatch = useDispatch();


        //  At start bring all Movies
        useEffect( () => { 
            dispatch(getallMoviesAction());
        },[ ] 
        )

        
        //useSelector(state) took the value of state from action 
        // Note: state come from moviesReducer
        const UpdatedMoviesState = useSelector((state) => state.MoviesState)
        
        
        //  get effect only when the value of UpdatedMoviesState have changed ..
        useEffect( () => { 
            setMoviesState(UpdatedMoviesState);
        },[UpdatedMoviesState] 
        )


        return (

                <Row className="mt-3">

                        { MoviesState.length?( MoviesState.map((item)=>{ 
                                                                return(
                                                                        <CardMovie  
                                                                                key={item.id}
                                                                                id={item.id}
                                                                                title={item.title} 
                                                                                release_date={item.release_date}
                                                                                vote_count={item.vote_count}
                                                                                vote_average={item.vote_average}
                                                                                poster_path={item.poster_path}
                                                                        />              
                                                                ) 
                        } )) :<h2 className="text-center p-5">No Movies ..</h2>}


                        { MoviesState.length?( <PaginationCompo/> ):null}  
                                                                                  
                </Row>       
        );

};
export default MoviesList;             