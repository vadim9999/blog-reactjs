
const initialState = {
    posts: [],
    post:{},
    // comments:[]
}
    


const postsReducer = (state = initialState, action) =>{
    console.log("postsReducer_actions");
    
    switch (action.type){
        case "GET_POSTS_SUCCESS":
            console.log("Get_Posts_Success");
            return Object.assign({}, state, {
                posts: action.payload.data,
                post:{},
                comments:[]
            })
            

        case "GET_POSTS_FAIL":
            console.log("Reducers get_posts_fail");
            return state;
        
        case "GET_POST_SUCCESS":
                console.log("Reducer Post success");
            
            return {
                ...state,
                post: action.payload.data,
                // comments: action.payload.data.comments
            }
        
        // case "CREATE_COMMENT_SUCCESS":
        //     console.log("create comment success");
            
        // return{
        //     ...state,
        //     comments: action.payload.data.comments
        // }

        default:
            return state
    }
}

export default postsReducer;