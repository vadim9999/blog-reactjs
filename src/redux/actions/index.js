const getPosts = () => ({
  type: 'GET_POSTS',
  payload: {
    request: {
      url: '/posts',
    },
  },
});

const getPostById = id => ({
  type: 'GET_POST',
  payload: {
    request: {
      url: `/posts/${id}`,
      params: {
        _embed: 'comments',
      },
    },
  },
});

const createCommentInPost = ({ postId, body, date }) => ({
  type: 'CREATE_COMMENT',
  payload: {
    request: {
      method: 'post',
      url: '/comments',

      data: {
        postId: parseInt(postId, 10),
        body,
        date,
      },
    },
  },
});

export { getPosts, getPostById, createCommentInPost };
