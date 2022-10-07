import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList.js";
import NavbarComp from "./components/NavbarComp.js"
import axios from 'axios'
import { useEffect, useState } from "react";
import {BrowserRouter , Routes, Route} from "react-router-dom"
import MovieDetailsComp from "./components/MovieDetailsComp.js"

import {getallMoviesAction} from "./redux/actions/movieAction.js"
import { useSelector , useDispatch } from "react-redux"





const App = () => {

    const [MoviesState,setMoviesState]=useState([])
    const [PagesCountState,setPagesCountState]=useState(0)



       






          
        



        
        return (

            <div className="font color-body">
                  
                <NavbarComp/>
                  
                <Container>


                    <BrowserRouter>
                        <Routes>
                            <Route  path="/" element={<MoviesList     MoviesState={MoviesState}
                                                                    
                                                                    PagesCountState={PagesCountState} />}/>
                                                
                            <Route path="/movie/:id" element={<MovieDetailsComp/>}/>
                        </Routes>
                    </BrowserRouter>
                

                </Container>
            </div>
          );


}

export default App;
