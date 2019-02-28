//counter components
import React from 'react';
import { connect } from 'react-redux';
import { countNumber } from '../reducers/countReducer'
import { toggleImportanceOf } from '../reducers/countReducer'
import { createStore } from 'redux'

console.log('toimiiko component counter')
export function Counter({ value }) {
    // const notes = store.getState().initialState

    // console.log('counter store', state)
    // console.log('counter store', value.count)
    // console.log('store counter.js', store.getState())
    return (
        <div>
            <h1>Counter</h1>
            <p>This is a simple example of a React component.</p>
            {/* <p>Current count: <strong>{store.count}</strong></p> */}
            {/* <button onClick={props.increment}>Increment</button> */}
        </div>
    )
}
console.log('mapstatetoprops', mapStateToProps)

// store.subscribe(() => {
//     const storeNow = store.getState()
//     console.log(storeNow)
//   })

// täällä on ongelma
const mapStateToProps = state => {
    console.log('counter state', state)
    console.log('counter state 2', state.count)
    return {
        value: state.value
    }
};

export default connect(mapStateToProps)(Counter);