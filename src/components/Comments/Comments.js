
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from "lodash"
import uuidv1 from 'uuid/v1'

const mapStateToProps = (state) =>{
    return {
        comments: state.post.comments
    }
}   

class ConnectedComments extends Component{
    
    render(){
        const {comments} = this.props;
        console.log("Comments");
        console.log(comments);
        
        return (
            <ul>
            {_.map(comments, (comment) => {
                return(<li key={uuidv1()}>{comment.body}</li>)
            })}
            </ul>
        ) 
    }
}

const Comments = connect(mapStateToProps)(ConnectedComments)
export default Comments