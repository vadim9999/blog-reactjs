import React, { Component } from 'react'
import { connect } from "react-redux"
import { createCommentInPost } from "../../redux/actions/"

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
         createCommentInPost({
            id, 
            comment:"Hello!",  
            date: new Date().toLocaleString()})
        this.setState({
            comment:""
        })
    }

    render() {
       
        console.log();
        return (
            <div>
                <input onChange={this.onHandleChange}></input>
                <button onClick={this.onHandleClick}>Add comment</button>
            </div>
        )
    }
}

const CreateComment = connect(mapStateToProps, mapDispatchToProps)(ConnectedCreateComment)
export default CreateComment;