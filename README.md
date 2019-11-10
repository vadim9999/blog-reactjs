#### Blog App

In project was used frameworks/libraries:

- ReactJS
- Redux and Middleware
- React Router
- react-router-dom
- Redux Axios Middleware
- uuid
- lodash
- Eslint
- Prettier


### Screenshots

<img src="https://github.com/vadim9999/blog-reactjs/blob/master/screenshots/screenshot1.png">

<img src="https://github.com/vadim9999/blog-reactjs/blob/master/screenshots/screenshot2.png">


### Starting up project


Scripts for starting:

- project:


```
npm install
npm start
```

- eslint:

```
npm run lint                
```

- prettier:

```
npm run format
```
[API postman](https://documenter.getpostman.com/view/1917440/RzteTChV?version=latest)
API of postman can return empty fields then I wrote middleware https://github.com/vadim9999/blog-reactjs/blob/master/src/redux/middleware/index.js that fix this. It's replacing empty or undefined field just simple words "Noname", "00-00-0000", "No text".

APP consists two pages. Their urls:

- `/` - display all posts
- `/posts/:id` - display post by id.

For creating an interface was used css and flexboxes.

Tree of folder `src`

```
├── components
│   ├── Comments
│   │   ├── Comments.js
│   │   └── style.css
│   ├── CreateComment
│   │   ├── CreateComment.js
│   │   └── style.css
│   ├── Header
│   │   ├── Header.js
│   │   └── styles.css
│   ├── ListPosts
│   │   ├── ListPosts.js
│   │   ├── noimage.svg
│   │   └── styles.css
│   ├── Post
│   │   ├── Post.js
│   │   └── styles.css
│   ├── PostDetails
│   │   ├── noimage.svg
│   │   ├── PostDetails.js
│   │   └── styles.css
│   └── Posts
│       ├── Posts.js
│       └── styles.css
├── index.css
├── index.js
├── redux
│   ├── actions
│   │   └── index.js
│   ├── middleware
│   │   └── index.js
│   ├── reducers
│   │   └── posts.js
│   └── store
│       └── index.js
├── Router.js
└── serviceWorker.js
```

