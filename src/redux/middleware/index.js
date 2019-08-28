import _ from "lodash"

export const fixDataApiMiddleware = ({dispatch}) =>{
    console.log("MIddleWare");
    
    return (next) =>{
        return (action) =>{
            console.log("CallMiddleWare");
            console.log(action);
            
            if(action.type === "GET_POSTS_SUCCESS"){
                let posts = action.payload.data;

                let fixedDataPosts = _.map(posts,(post) =>{
                    return  _.isArray(post) ? 
                    post[0] : post;
                    
                })
                _.map(posts, (post) => {
                    if(typeof post.date != 'string') post.date = "0/00/0000"
                    if(typeof post.creator != 'string') post.creator = "Noname"
                })
                
                action.payload.data = fixedDataPosts
                return next(action)
            }
            
            return next(action);
        }
    }
} 