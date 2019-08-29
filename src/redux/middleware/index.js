import _ from 'lodash';
import { getPostById } from '../actions';

const checkDataOnCorrect = (data, text) => {
  if (data !== undefined && data.length > 0) return data;
  return text;
};

const fixDataApiMiddleware = ({ dispatch }) => next => action => {
  switch (action.type) {
    case 'GET_POSTS_SUCCESS': {
      const posts = action.payload.data;

      const fixedDataPosts = _.map(posts, post =>
        _.isArray(post) ? post[0] : post
      );

      _.map(posts, post => {
        post.creator = checkDataOnCorrect(post.creator, 'Noname');
        post.title = checkDataOnCorrect(post.title, 'No title');
        post.date = checkDataOnCorrect(post.date, '00/00/0000');
        post.body = checkDataOnCorrect(post.body, 'No text');
      });

      action.payload.data = fixedDataPosts;
      return next(action);
    }

    case 'CREATE_COMMENT_SUCCESS': {
      dispatch(getPostById(action.payload.data.postId));
      break;
    }

    case 'GET_POST_SUCCESS': {
      const post = { ...action.payload.data };

      post.title = checkDataOnCorrect(post.title, 'No title');
      post.creator = checkDataOnCorrect(post.creator, 'Noname');
      post.date = checkDataOnCorrect(post.date, '00/00/0000');
      post.body = checkDataOnCorrect(post.body, 'No text');

      action.payload.data = post;

      return next(action);
    }

    default: {
      return next(action);
    }
  }
};

export default fixDataApiMiddleware;
