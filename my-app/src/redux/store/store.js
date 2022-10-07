import {createStore}  from "redux"
import {moviesReducer} from "../reducer/moviesReducer.js"

// https://www.npmjs.com/package/@redux-devtools/extension
import { composeWithDevTools } from '@redux-devtools/extension';



// 1 - create store 
export const store = createStore(moviesReducer,composeWithDevTools());