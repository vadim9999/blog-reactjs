import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostById } from '../../redux/actions';
import CreateComment from '../CreateComment/CreateComment';
import Comments from '../Comments/Comments';
import PostDetails from '../PostDetails/PostDetails';
import './styles.css';

const mapDispatchToProps = dispatch => ({
  getPostById: id => dispatch(getPostById(id))
});

class ConnectedPost extends Component {
  componentDidMount() {
    const id = this.props.match.params.postId;
    this.props.getPostById(id);
  }

  render() {
    return (
      <div className="main-block-post">
        <div className="block-post-details">
          <PostDetails />
          <Comments />
          <CreateComment />
        </div>
      </div>
    );
  }
}

const Post = connect(
  null,
  mapDispatchToProps
)(ConnectedPost);
export default Post;
