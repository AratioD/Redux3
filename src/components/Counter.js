//counter components
import React from 'react';
import { connect } from 'react-redux';
import store from './../store/';

console.log('toimiiko component counter')
function Counter(props) {
    console.log(props)
    console.log('store counter.js', store)
    return (
        <div>
            <h1>Counter</h1>
            <p>This is a simple example of a React component.</p>
            <p>Current count: <strong>{props.count}</strong></p>
            {/* <button onClick={props.increment}>Increment</button> */}
        </div>
    )
}

function mapStateToProps(state) {
    console.log('mapStateToProps', state)
    return {
        count: state.count
    }
}

console.log('connect mapstatetoprops', connect(mapStateToProps)(Counter))

export default connect(mapStateToProps)(Counter);
