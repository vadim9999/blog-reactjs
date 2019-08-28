import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import App from './App'
import Post from './components/Post/Post'
import Posts from './components/Posts/Posts'
class Router extends Component {
    render(){
        return(
            <BrowserRouter>
            <div>
                <Link to="/">Posts</Link>
                <Link to="/posts/13">Go to post 13</Link>
                </div>
            <Switch>
                <Route exact path="/" component={Posts} />
                <Route path="/posts/:postId" component={Post} />
            </Switch>
            </BrowserRouter>
        )
    }
}

export default Router