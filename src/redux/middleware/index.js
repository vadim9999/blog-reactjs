import _ from "lodash"
import { getPostById } from "../actions";

export const fixDataApiMiddleware = ({dispatch}) =>{
    console.log("MIddleWare");
    
    return (next) =>{
        return (action) =>{
            console.log("CallMiddleWare");
            console.log(action);
            
            switch(action.type){
                case "GET_POSTS_SUCCESS":
                        let posts = action.payload.data;

                        let fixedDataPosts = _.map(posts,(post) =>{
                            return  _.isArray(post) ? 
                            post[0] : post;
                            
                        })
                        
                        _.map(posts, (post) => {
                            post.creator = checkDataOnCorrect(post.creator, "Noname")
                            post.date = checkDataOnCorrect(post.date, "00/00/0000")
                        })
                        
                        action.payload.data = fixedDataPosts
                        return next(action)

                case "CREATE_COMMENT_SUCCESS":  
                    dispatch(getPostById(action.payload.data.postId))
                    break;
                    
                case "GET_POST_SUCCESS":
                        let post = action.payload.data;

                        
                        post.title = checkDataOnCorrect(post.title, "No title") 
                        post.creator = checkDataOnCorrect(post.creator, "Noname")
                        post.date = checkDataOnCorrect(post.date, "00/00/0000")
                        post.body = checkDataOnCorrect(post.body, "00/00/0000")
                        action.payload.data = post;
                        // post.
                        // if(post.title == undefined & post.title.length <= 0) post.title = "No title" 
                        
                    return next(action);
                    
                default:
                        return next(action);
            }

        
            

            
        }
    }
} 

const checkDataOnCorrect = (data, text)=>{
    if(data != undefined && data.length >= 0)
    return  data;
    else return text;
}