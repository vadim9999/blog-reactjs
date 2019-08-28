import React, { Component } from 'react';
import { connect } from "react-redux"
import { getPosts } from "../../redux/actions"
import ListPosts from "../ListPosts/ListPosts"
import {Wrapper, Title, MainBlock} from './styles'
import './styles.css'

const mapDispatchToProps = (dispatch) => {

    return {
        getPosts: () => dispatch(getPosts())
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
class ConnectedPosts extends Component {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this)
    }

    componentDidMount() {
        this.props.getPosts()
    }
    onClick() {
        console.log("Click");

    }

    render() {
        return (
            <div className="main-block">
                <ListPosts />
            </div>
               
        );
    }
}

const Posts = connect(mapStateToProps, mapDispatchToProps)(ConnectedPosts)
export default Posts;