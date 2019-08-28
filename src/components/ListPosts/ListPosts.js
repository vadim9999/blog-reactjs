
import React, { Component } from 'react'
import { connect } from "react-redux"
import _ from "lodash"
import uuidv1 from 'uuid/v1'
import { Link } from 'react-router-dom'

import "./styles.css"

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

class ConnectedListPosts extends Component {

    render() {
        const { posts } = this.props;
        console.log(posts);

        return (
            <div className="posts-block">
                <div className="all-posts">
                    <div className="posts">
                        {_.map(posts, (post) => {

                            const { id, title, body, creator, date } = post;
                            return (
                                <Link style={{textDecoration:'none', color:'black'}} to={`/posts/${id}`}>
                                    <div className="post" key={uuidv1()}>
                                        <div>
                                        <a className="title-post">{"Title: " + title}</a>
                                        <div className="desctiption-post">  {"  Description: " + body.slice(0, 50) }</div>
                                       
                                        </div>
                                       <div >
                                       <div>{" Author: " + creator}</div>
                                       <div>{" Date: " + ((date != 'undefined' & typeof date == 'string') ? date.slice(0,9): " None") }</div>
                                       </div>
                                       
                                    </div>
                                </Link>)

                        })}
                    </div>
                </div>
                <div className="recent-posts">
                    HI
                </div>
            </div>

        )

    }
}

const ListPosts = connect(mapStateToProps)(ConnectedListPosts)
export default ListPosts