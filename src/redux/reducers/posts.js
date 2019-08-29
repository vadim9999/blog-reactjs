const initialState = {
  posts: [],
  post: {},
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POSTS_SUCCESS': {
      return {
        ...state,
        posts: action.payload.data,
        post: {},
        comments: [],
      };
    }

    case 'GET_POST_SUCCESS': {
      return {
        ...state,
        post: action.payload.data,
      };
    }

    default:
      return state;
  }
};

export default postsReducer;
