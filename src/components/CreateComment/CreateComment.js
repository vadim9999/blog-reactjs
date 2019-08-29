import React, { Component } from 'react'
import { connect } from "react-redux"
import { createCommentInPost } from "../../redux/actions/"

import "./style.css"

const mapDispatchToProps = (dispatch) => {
    return {
        createCommentInPost: (data) => { dispatch(createCommentInPost(data)) }
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.post.id
    }
}

class ConnectedCreateComment extends Component {
    constructor() {
        super();
        this.state={
            comment:""
        }
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleClick = this.onHandleClick.bind(this)
    }

    onHandleChange(e){
        console.log(e.target.value);
        this.setState({
            comment:e.target.value
        })
    }

    onHandleClick(e){
        e.preventDefault()
        console.log("click");
        const { id, createCommentInPost } = this.props;
        console.log("Parse In");
        console.log(typeof parseInt(id));
        
         createCommentInPost({
            postId: id, 
            body: this.state.comment,  
            date: new Date().toLocaleString()})
        this.setState({
            comment:""
        })
    }

    render() {
       
        console.log();
        return (
            <div className="comment-block">
                <textarea value = {this.state.comment} onChange={this.onHandleChange} name="Text1" cols="40" rows="5"></textarea>
                <button onClick={this.onHandleClick}>Add comment</button>
            </div>
        )
    }
}

const CreateComment = connect(mapStateToProps, mapDispatchToProps)(ConnectedCreateComment)
export default CreateComment;