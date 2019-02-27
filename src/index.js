import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom' // changes
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import ConnectedCounter from './App'
import countReducer from './reducers/countReducer'

const reducer = combineReducers({
    count: countReducer
})

const store = createStore(countReducer)

console.log('count index.js', store.getState())
// console.log('reducer index.js', store.getElementById())
// store.subscribe(() => console.log('storen subscribe', store.getState()))

render(
    <Provider store={store}>
        <ConnectedCounter />,
    </Provider>,
document.getElementById('root'))