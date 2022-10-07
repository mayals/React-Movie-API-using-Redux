import {Container,Row,Col} from 'react-bootstrap';
import logo from '../images/logo.png'


import { useSelector , useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import {getallMoviesAction,getMoviesSearchAction} from "../redux/actions/movieAction.js"



const NavbarComp = () =>{
    
                const onSearch = (word) =>{
                    getSearch(word)
                }


                const dispatch = useDispatch();

                //  getSearch by using axios that get only movie or movies according to query=${word}:
                const getSearch = async(word) =>{
                            if ( word === ""){
                                dispatch(getallMoviesAction());
                            }else{
                                dispatch(getMoviesSearchAction(word));
                            }
                }

                return (
                    <div className="nav-style w-100">
                        <Container>
                            <Row className="pt-2">

                                <Col xs="2" lg="1">
                                    <a href="/">
                                    <img className="logo" src={logo} alt="dfs" />
                                    </a>
                                </Col>

                                <Col xs="10" lg="11" className=" d-flex align-items-center">
                                    <div className="search  w-100">
                                    <i className="fa fa-search"></i>
                                    <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Search .."
                                            onChange={(e)=>onSearch(e.target.value)}
                                            />
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                );
}

export default NavbarComp;


