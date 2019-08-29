import _ from 'lodash';
import { getPostById } from '../actions';

const checkDataOnCorrect = (data, text) => {
  if (data !== undefined && data.length > 0) return data;
  return text;
};



const checkPost = (post) => {
  const {creator, title, date, body} = post;

  return { ...post, 
    creator: checkDataOnCorrect(creator, 'Noname'),
    title: checkDataOnCorrect(title, 'No title'),
    date: checkDataOnCorrect(date, '00/00/0000'),
    body: checkDataOnCorrect(body, 'No text')}
}

const checkPostsOnCorrect = (posts) => {
  const fixedDataPosts = _.map(posts, post => (_.isArray(post) ? post[0] : post));

  return _.map(fixedDataPosts, checkPost);
}

const fixDataApiMiddleware = ({ dispatch }) => next => action => {
  switch (action.type) {
    case 'GET_POSTS_SUCCESS': {
      const newAction = {...action}
      newAction.payload.data = checkPostsOnCorrect(newAction.payload.data);

      return next(newAction);
    }

    case 'CREATE_COMMENT_SUCCESS': {
      return dispatch(getPostById(action.payload.data.postId));

    }

    case 'GET_POST_SUCCESS': {
      const newAction = { ...action };

      newAction.payload.data = checkPost(newAction.payload.data)

      return next(newAction);
    }

    default: {
      return next(action);
    }
  }
};



export default fixDataApiMiddleware;
