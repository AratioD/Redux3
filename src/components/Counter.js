//counter components
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

console.log('toimiiko component counter')
function Counter(props) {
    return (
        <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>

            <p>Current count: <strong>{props.count}</strong></p>

            <button onClick={props.increment}>Increment</button>
        </div>
    )
}

// console.log(store.getState())
// const store = createStore(counterReducer)
// export default connect(
//   state => state.counter,
//   dispatch => bindActionCreators(actionCreators, dispatch)
// )(Counter);
export default Counter;

