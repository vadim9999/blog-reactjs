import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import App from './App'
import Post from './components/Post/Post'
class Router extends Component {
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/posts/:postId" component={Post} />
            </Switch>
            </BrowserRouter>
        )
    }
}

export default Router