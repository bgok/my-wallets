import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger/src'
import thunk from 'redux-thunk'
import reducer from '../../reducers'
import './App.css'
import AppRouter from './AppRouter'

const logger = createLogger()
const store = createStore(reducer, {}, applyMiddleware(thunk, logger))

function App() {
  return (
    <Provider store={store}>
      <div className='App' style={{ color: 'lightgray' }}>
        <AppRouter />
      </div>
    </Provider>
  )
}

export default App
