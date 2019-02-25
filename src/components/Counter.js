//counter components
import React from 'react';
import { connect } from 'react-redux';
// import { actionCreators } from '../store/Counter';
// import { bindActionCreators } from 'redux';

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


function mapStateToProps(state) {
    console.log('mapStateToProps', state)
    return {
        count: state.count
    }
}
// export default Counter;
export default connect(mapStateToProps)(Counter);


// console.log(store.getState())
// const store = createStore(counterReducer)
// export default connect(
//   state => state.counter,
//   dispatch => bindActionCreators(actionCreators, dispatch)
// )(Counter);