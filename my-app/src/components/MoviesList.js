import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationCompo from "./PaginationCompo.js"



const MoviesList = (props) => {
  
        return (

                <Row className="mt-3">

                        { props.Movies.length?( props.Movies.map((item)=>{ 
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



                        { props.Movies.length?(<PaginationCompo  
                                                      getCurrnetPage={props.getCurrnetPage}
                                                      pageCount={props.pageCount}
                                             /> ):null}
                        
       
                </Row>       
        );


};

export default MoviesList;             