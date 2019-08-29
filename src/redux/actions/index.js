
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

const createCommentInPost = ({postId, body, date}) =>{
    console.log("action createCommentInPost");
    console.log(postId);
    
    return {
        type: "CREATE_COMMENT",
        payload: {
            request:{
                method: 'post',
                url: '/comments',
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                data: {
                    postId: parseInt(postId),
                    body,
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