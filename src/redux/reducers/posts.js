
const initialState = {
    posts: [],
    post:{},
}
    


const postsReducer = (state = initialState, action) =>{
    console.log("postsReducer_actions");
    
    switch (action.type){
        case "GET_POSTS_SUCCESS":
            console.log("Get_Posts_Success");
            return Object.assign({}, state, {
                posts: action.payload.data
            })
            

        case "GET_POSTS_FAIL":
            console.log("Reducers get_posts_fail");
            return state;
        
        case "GET_POST_SUCCESS":
                console.log("Reducer Post success");
            return {
                ...state,
                post: action.payload.data,
            }
                return state

        default:
            return state
    }
}

export default postsReducer;