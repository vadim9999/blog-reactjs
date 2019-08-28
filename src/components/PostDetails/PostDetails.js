import React, { Component } from 'react';
import {connect} from "react-redux"

const mapStateToProps = (state) =>{
    return {
        post: state.post
    }
}

class ConnectedPostDetails extends Component{

    render(){
        console.log("Post details");
        
        console.log(this.props.post);
        const {title, body, creator, date} = this.props.post;
        return (
            <div>
            <div>{`Title: ${title}`}</div>
            <div>{`Body: ${body}`}</div>
            <div>{`Author: ${creator}`}</div>
            <div>{`Date: ${date}`}</div>
            </div>
            
        )
    }
}


const PostDetails = connect(mapStateToProps)(ConnectedPostDetails)
export default PostDetails