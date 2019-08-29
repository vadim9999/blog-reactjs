import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../redux/actions';
import ListPosts from '../ListPosts/ListPosts';
import './styles.css';

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(getPosts())
});

class ConnectedPosts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div className="main-block">
        <ListPosts />
      </div>
    );
  }
}

const Posts = connect(
  null,
  mapDispatchToProps
)(ConnectedPosts);
export default Posts;
