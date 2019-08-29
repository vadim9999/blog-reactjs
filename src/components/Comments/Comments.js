
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from "lodash"
import uuidv1 from 'uuid/v1'
import './style.css'

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
                <div className="comments-block">
                <h3 className="comment">Comments</h3>
                {_.map(comments, (comment) => {
                return(<div className="comments-block-comm" key={uuidv1()}>{comment.body}</div>)
            })}
                </div>
            
        
        ) 
    }
}

const Comments = connect(mapStateToProps)(ConnectedComments)
export default Comments