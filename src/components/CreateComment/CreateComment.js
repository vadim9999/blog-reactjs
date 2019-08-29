import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCommentInPost } from '../../redux/actions';

import './style.css';

const mapDispatchToProps = dispatch => ({
  createCommentInPost: data => {
    dispatch(createCommentInPost(data));
  },
});

const mapStateToProps = state => ({
  id: state.post.id,
});

class ConnectedCreateComment extends Component {
  constructor() {
    super();

    this.state = {
      comment: '',
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  onHandleChange(e) {
    this.setState({
      comment: e.target.value,
    });
  }

  onHandleClick(e) {
    e.preventDefault();
    const { id, createCommentInPost } = this.props;

    createCommentInPost({
      postId: id,
      body: this.state.comment,
      date: new Date().toLocaleString(),
    });

    this.setState({
      comment: '',
    });
  }

  render() {
    return (
      <div className="comment-block">
        <textarea
          value={this.state.comment}
          onChange={this.onHandleChange}
          name="Text1"
          cols="40"
          rows="5"
        />
        <button type="button" onClick={this.onHandleClick}>
          Add comment
        </button>
      </div>
    );
  }
}

const CreateComment = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedCreateComment);
export default CreateComment;
