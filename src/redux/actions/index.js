
const getPosts = () =>{
    console.log("actions getPosts");
    
    return {
        type:"GET_POSTS",
        payload: {
            request:{
                url:'/posts'
            }
        }
    }
}

const getPostById = (id) =>{
    console.log("action create post by ID");
   
    return {
        type: "GET_POST",
        payload: {
            request:{
                url: '/posts/' + id,
                params: {
                    '_embed': 'comments'
                }
            }
        }
    }
    
}

const createCommentInPost = ({postId, comment, date}) =>{
    console.log("action createCommentInPost");
    
    return {
        type: "CREATE_COMMENT",
        payload: {
            request:{
                method: 'post',
                url: '/comments',
                data: {
                    postId,
                    body:comment,
                    date,
                    
                    
                }
            }
        }
    }
}
// const getPostsFail = () =>{
//     return {
//         type: ""
//     }
// }

export {
    getPosts,
    getPostById,
    createCommentInPost
}