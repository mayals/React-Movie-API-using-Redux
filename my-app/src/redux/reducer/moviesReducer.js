import {ALL} from "../types/moviesType.js"




const initialValue = { MoviesState:[] , PagesCountState:0 };
       
       

export const moviesReducer = (state=initialValue , action) =>{
                                                                switch(action.type){
                                                                        
                                                                    case ALL :
                                                                        return { MoviesState:action.allMoviesData ,
                                                                                PagesCountState:action.totalPagesCount
                                                                        }

                                                                    default:
                                                                            return state;
                                                                }
}

