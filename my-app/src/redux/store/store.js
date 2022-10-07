// https://www.npmjs.com/package/redux-thunk
import {createStore, applyMiddleware}  from "redux"
import {moviesReducer} from "../reducer/moviesReducer.js"
import thunk from "redux-thunk"


// https://www.npmjs.com/package/@redux-devtools/extension
// import { composeWithDevTools } from '@redux-devtools/extension';
// export const store = createStore(moviesReducer,composeWithDevTools());


// 1 - create store 
export const store = createStore(moviesReducer,applyMiddleware(thunk))