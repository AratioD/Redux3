// STORE COUNTER
import { createStore } from 'redux';

console.log("toimiiko store")

const initialState = {
    count: 3
};

console.log('initialstate', initialState.count)

const reducer = (state = initialState, action) => {
    console.log('intitialState inside reducer', state)
    console.log('reducre runnig', action)
    return state;
}

const store = createStore(reducer)

console.log('index.js store value', store)

export default store;


