import {combineReducers} from "redux"
import postReducer from './post'
import postsReducer from './posts'

const allReducers = combineReducers({
    post: postReducer,
    posts: postsReducer
})

export default allReducers