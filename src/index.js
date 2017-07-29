import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './app/rootReducer'
import rootSaga from './app/rootSaga'
import Main from './app/main'

import { createLogger } from 'redux-logger'

const logger = createLogger({
  collapsed: true
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Main />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);