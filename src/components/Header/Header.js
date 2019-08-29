import React, { Component } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import './styles.css'

class Header extends Component{
    render(){
        return(
            <header className="header">
                <div className="blog-name"><h3>Blog</h3></div>
            </header>
        )
    }
}

export default Header