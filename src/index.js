import React from 'react'
import { render } from 'react-dom' 
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import ConnectedCounter from './App'
import countReducer from './reducers/countReducer'

const reducer = combineReducers({
    count: countReducer,
    button: countReducer

})
// console.log(button)
const store = createStore(countReducer)

console.log('count index.js', store.getState())

render(
    <Provider store={store}>
        <ConnectedCounter />,
    </Provider>,
    document.getElementById('root'))