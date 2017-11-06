import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import App from './app'
import reducers from './reducers'

let middleWares = [thunk]

if (process.env.NODE_ENV !== 'production') {
  const { createLogger } = require('redux-logger')
  const logger = createLogger({collapsed: true})
  middleWares.push(logger)
}

const store = createStore(reducers, applyMiddleware(...middleWares))

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
