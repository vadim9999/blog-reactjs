
import React, {Component} from 'react'
import {connect} from "react-redux"
import _ from "lodash"
import uuidv1 from 'uuid/v1'

const mapStateToProps = (state) =>{
    return {
        posts: state.posts
    }
}

class ConnectedListPosts extends Component{
   
    render(){
        const {posts} = this.props;
        console.log(posts);
        
        return (
            <div> <ul>
                {_.map(posts, (post) => {
                    
                    const {title, body, creator, date } = post;
                    return (<li key={uuidv1()}>{"Title: " + title + 
                        "  Description: " + body.slice(0,50) + " Author: "  + creator + " Date: " + date}</li>)
                       
                })}
            </ul></div>
           
        )    
        
    }
}

const ListPosts = connect(mapStateToProps)(ConnectedListPosts)
export default ListPosts