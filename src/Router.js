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
import Header from './components/Header/Header'
class Router extends Component {
    render(){
        return(
            <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Posts} />
                <Route path="/posts/:postId" component={Post} />
            </Switch>
            </BrowserRouter>
        )
    }
}

export default Router