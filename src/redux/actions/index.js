
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

// const getPostsFail = () =>{
//     return {
//         type: ""
//     }
// }

export {
    getPosts
}