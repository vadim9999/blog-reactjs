import { createStore, applyMiddleware, compose } from "redux"
import postsReducer from "../reducers/posts"
// import thunk from "redux-thunk"
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import {fixDataApiMiddleware} from '../middleware'
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const client = axios.create({
    baseURL: 'https://simple-blog-api.crew.red/',
    responseType: 'json'
})

const store = createStore(postsReducer,
   storeEnhancers( applyMiddleware(
        
       axiosMiddleware(client),
       fixDataApiMiddleware
   )))

export default store;