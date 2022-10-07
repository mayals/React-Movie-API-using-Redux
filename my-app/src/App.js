import { Container } from "react-bootstrap";
import MoviesList from "./components/MoviesList.js";
import NavbarComp from "./components/NavbarComp.js"
import MovieDetailsComp from "./components/MovieDetailsComp.js"
import {BrowserRouter , Routes, Route} from "react-router-dom"



const App = () => {
        
        return (

            <div className="font color-body">
                  
                <NavbarComp/>
                  
                <Container>
                    <BrowserRouter>
                        <Routes>
                            <Route      path="/" element={<MoviesList/>}   />                                                          
                            <Route      path="/movie/:id" element={<MovieDetailsComp/>}   />
                        </Routes>
                    </BrowserRouter>
                </Container>
            
            </div>
          );


}

export default App;
