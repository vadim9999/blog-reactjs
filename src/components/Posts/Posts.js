import React , {Component} from 'react';
import {connect} from "react-redux"
import { getPosts } from "../../redux/actions"
import ListPosts from "../ListPosts/ListPosts"

const mapDispatchToProps = (dispatch) =>{
  
    return {
      getPosts : () => dispatch(getPosts())
    }
  }

  const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
  }
class ConnectedPosts extends Component {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        console.log("Click");
        this.props.getPosts()
    }

    render() {
        return (
            <div className="App">
                Hi
            <button onClick={this.onClick}>Get posts</button>
            <ListPosts />
            </div>
        );
    }
}

const Posts = connect(mapStateToProps, mapDispatchToProps)(ConnectedPosts)
export default Posts;