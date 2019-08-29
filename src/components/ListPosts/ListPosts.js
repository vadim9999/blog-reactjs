
import React, { Component } from 'react'
import { connect } from "react-redux"
import _ from "lodash"
import uuidv1 from 'uuid/v1'
import { Link } from 'react-router-dom'
import image from "./noimage.svg"

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
               
                    <div className="posts">
                        {_.map(posts, (post) => {

                            const { id, title, body, creator, date } = post;
                            return (
                                <Link style={{textDecoration:'none', color:'black'}} to={`/posts/${id}`}>
                                    <div className="post" key={uuidv1()}>
                                    
                                    <div className="date-post"><i>{date.slice(0,9)}</i></div>
                                    <div className="author">{"Author: " + creator}</div>
                                        <h2 className="title-post">{title}</h2>
                                        
                                        <img src={image} alt="No image" className="image-block" />
                                        
                                        <div className="desctiption-post">  {"  Description: " + body.slice(0, 100) }</div>
                                       
                                        
                                     
                                       
                                       
                                       
                                       
                                    </div>
                                </Link>)

                        })}
                    </div>
                
            </div>

        )

    }
}

const ListPosts = connect(mapStateToProps)(ConnectedListPosts)
export default ListPosts