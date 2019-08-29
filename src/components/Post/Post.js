import React, { Component } from 'react';
import {connect} from "react-redux";
import {getPostById, createCommentInPost} from '../../redux/actions'
import CreateComment from '../CreateComment/CreateComment'
import Comments from '../Comments/Comments'
import PostDetails from '../PostDetails/PostDetails'
import "./styles.css"

const mapDispatchToProps = (dispatch) => {
    return {
        getPostById : (id) => dispatch(getPostById(id)),
        createCommentInPost: (data) => dispatch(createCommentInPost(data))
    }
}


class ConnectedPost extends Component{
    constructor(){
        super()
    }

    componentDidMount(){
        console.log("component did mount");
        
        console.log(this.props.match.params.postId);

        let id = this.props.match.params.postId
        this.props.getPostById(id)
        console.log();
    }

    render(){
        console.log("Post component");
        
        
        
        
        return (
            <div className="main-block-post">
            <div className="block-post-details">
                <PostDetails />
                <Comments />
                <CreateComment />
            </div>
            </div>
        )
    }
}

const Post = connect(null,mapDispatchToProps)(ConnectedPost)
export default Post;