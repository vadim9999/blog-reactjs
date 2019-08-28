
import React, {Component} from 'react'
import {connect} from "react-redux"
import _ from "lodash"

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
                    if (_.isArray(post))  
                        return (<li>{post[0].title}</li>)
                        else
                        return (<li>{post.title}</li>)
                        

                    
                })}
            </ul></div>
           
        )    
        
    }
}

const ListPosts = connect(mapStateToProps)(ConnectedListPosts)
export default ListPosts