import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Post from './components/Post/Post';
import Posts from './components/Posts/Posts';
import Header from './components/Header/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/posts/:postId" component={Post} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
