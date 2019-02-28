import React from 'react'
import { render } from 'react-dom' 
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import ConnectedCounter from './App'
import countReducer from './reducers/countReducer'

const store = createStore(countReducer)

render(
    <Provider store={store}>
        <ConnectedCounter />,
    </Provider>,
    document.getElementById('root'))