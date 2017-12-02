import React from 'react';
import {render} from 'react-dom';
import routes from './routes.jsx';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk'
import { post }  from './reducers'

const reducers = combineReducers({
  post
});

const logger = createLogger({

});

export const store = createStore(reducers,
  compose(
    applyMiddleware(thunk, logger)
  )
);

render(
  <Provider store={store}>
    {routes}
  </Provider>
  , document.getElementById('root')
);
