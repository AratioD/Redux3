//counter components
import React from 'react';
import { connect } from 'react-redux';
import { countNumber } from '../reducers/countReducer'
import { toggleImportanceOf } from '../reducers/countReducer'

console.log('toimiiko component counter')
function Counter({ store }) {
    console.log('counter store', store)
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

// täällä on ongelma
const mapStateToProps = (state) => {
    console.log('mapStateToProps', state);
    return {
        count: state
    }
}

// console.log('connect mapstatetoprops', connect(mapStateToProps)(Counter))
const ConnectedCounter = connect()(Counter)
export default ConnectedCounter;
