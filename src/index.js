import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import history from './app/history'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './app/rootReducer'
import rootSaga from './app/rootSaga'
import Main from './app/Main'
import {routerMiddleware} from 'react-router-redux'

import {createLogger} from 'redux-logger'

const logger = createLogger({
  collapsed: true
});

const sagaMiddleware = createSagaMiddleware();
const routersMiddleWare = routerMiddleware(history);
const middlewares = [logger, sagaMiddleware, routersMiddleWare];

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Main/>
    </Provider>
  </Router>,
  document.getElementById('root')
);