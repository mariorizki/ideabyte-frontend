import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux'; // a function, so it's camelCase
import { Provider } from 'react-redux'; // a component, so it's TitleCase

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Home from './pages/Home';
import About from './pages/About';

library.add(faUser);

// REDUX INITIAL STATE
// Prepare dummy data when the app starts

const initialState = {
  // before we're logged in, the condition is false
  isAuthenticated: false, // will be true after we're logged in

  // this specific user will be retrieved from the backend /users/:id
  user: {
    id: 1,
    avatar: '/assets/images/avatar.jpg',
    name: 'Joen Doe',
    email: 'joendoe@example.com'
  },

  // these ideas will be retrieved from the backend /ideas
  ideas: [
    {
      id: 1,
      title: 'Tripvesto Trip Planner 1',
      short: "App to plan and gather your friends to travel. Let's join us!",
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia',
      slug: 'tripvesto-trip-planner'
    },
    {
      id: 2,
      title: 'Tripvesto Trip Planner 2',
      short: "App to plan and gather your friends to travel. Let's join us!",
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia',
      slug: 'tripvesto-trip-planner'
    },
    {
      id: 3,
      title: 'Tripvesto Trip Planner 3',
      short: "App to plan and gather your friends to travel. Let's join us!",
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia',
      slug: 'tripvesto-trip-planner'
    },
    {
      id: 4,
      title: 'Tripvesto Trip Planner 4',
      short: "App to plan and gather your friends to travel. Let's join us!",
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia',
      slug: 'tripvesto-trip-planner'
    },
    {
      id: 5,
      title: 'Tripvesto Trip Planner 5',
      short: "App to plan and gather your friends to travel. Let's join us!",
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia',
      slug: 'tripvesto-trip-planner'
    },
    {
      id: 6,
      title: 'Tripvesto Trip Planner 6',
      short: "App to plan and gather your friends to travel. Let's join us!",
      author: 'Joen Doe',
      date: '2019/02/25',
      location: 'Jakarta, Indonesia',
      slug: 'tripvesto-trip-planner'
    }
  ]
};

// REDUX REDUCER
// Will be called when dispatch is called

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_IS_AUTHENTICATED':
      return {
        isAuthenticated: state.isAuthenticated
      };
    case 'GET_PROFILE':
      return {
        user: state.user
      };
    case 'GET_IDEAS':
      return {
        ideas: state.ideas
      };
    case 'REGISTER_USER':
      return {
        // user: state.user,
        // ideas: state.ideas,
        // we can make is simpler with spread ... operator
        ...state,
        isAuthenticated: state.isAuthenticated
      };
    case 'LOGIN_USER':
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: true
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
};

// REDUX CREATE STORE

const reduxStore = createStore(
  reducer,
  // Add Redux DevTools Extension
  // https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends React.Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
