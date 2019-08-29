import React, { Component } from 'react';
import { connect } from 'react-redux';
import image from './noimage.svg';
import './styles.css';

const mapStateToProps = state => ({
  post: state.post,
});

class ConnectedPostDetails extends Component {
  render() {
    const { title, body, creator, date } = this.props.post;
    return (
      <article className="details-block">
        <header className="header-block-details">
          <span>{date}</span>
          <span>{`Author: ${creator}`}</span>
          <h1 className="details-block-title">{title}</h1>
        </header>
        <img className="img-det-block" alt="No" src={image} />
        <p>{body}</p>
      </article>
    );
  }
}

const PostDetails = connect(mapStateToProps)(ConnectedPostDetails);
export default PostDetails;
