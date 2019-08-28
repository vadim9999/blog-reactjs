import React, { Component } from 'react';
import {connect} from "react-redux";
import {getPostById, createCommentInPost} from '../../redux/actions'

import Comments from '../Comments/Comments'
const mapDispatchToProps = (dispatch) => {
    return {
        getPostById : (id) => dispatch(getPostById(id)),
        createCommentInPost: (data) => dispatch(createCommentInPost(data))
    }
}

class ConnectedPost extends Component{

    
    render(){
        console.log("Post component");
        
        console.log(this.props.match.params.postId);

        let id = this.props.match.params.postId
        this.props.getPostById(id)
        console.log();
        // this.props.createCommentInPost({
        //     id, 
        //     comment:"Hello!",  
        //     date: new Date().toLocaleString()})
        // console.log();
        
        return (
            <div>
                Hi
                <Comments />
            </div>
        )
    }
}

const Post = connect(null,mapDispatchToProps)(ConnectedPost)
export default Post;