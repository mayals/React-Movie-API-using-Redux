import {ALL} from "../types/moviesType.js"




const initialValue = { movies:[] , pageCount: 0 };
       
       

export const moviesReducer = (state= initialValue , action) =>{
                                        switch(action.type){
                                                case ALL :
                                                    return { movies:action.moviesData ,
                                                             pageCount:action.pageCountData
                                                    }
                                                default:
                                                    return state;
                                        }
}

