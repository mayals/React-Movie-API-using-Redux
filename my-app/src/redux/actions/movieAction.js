import {ALL, MovieAPI} from "../types/moviesType.js"
import axios from "axios"



// getallMoviesAction
export const getallMoviesAction = () =>{

        return async (dispatch) =>{
                    const response = await axios.get(MovieAPI)
                    console.log(response.data.results)
                    console.log(response.data.total_pages)
                    dispatch({ type: ALL, allMoviesData:response.data.results, totalPagesCount:response.data.total_pages } )
        }
}






//getMoviesSearchAction
export const getMoviesSearchAction = (word) =>{

    return async (dispatch) =>{
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1be51e18a1e40908e04cb7ea3bc521f9&language=en-US&page=1&include_adult=false&query=${word}`)
                dispatch({ type: ALL, allMoviesData:response.data.results, totalPagesCount:response.data.total_pages } )
    }
}






//getMoviesSearchAction
export const getCurrentPageAction = (page) =>{

    return async (dispatch) =>{
                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1be51e18a1e40908e04cb7ea3bc521f9&language=en-US&page=${page}`)
                dispatch({ type: ALL, allMoviesData:response.data.results, totalPagesCount:response.data.total_pages } )
    }
}

