
const initialState={
    post: {}
}

const postReducer = (state = initialState, action) => {
    switch (action.type){
        case "GET_POST_SUCCESS":
        console.log("Reducer Post");
        
        return state

        default:
            return state;
    }
}

export default postReducer