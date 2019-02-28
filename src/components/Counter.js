//counter components
import React from 'react';
import { connect } from 'react-redux';
// import { countNumber } from '../reducers/countReducer'
// import { toggleImportanceOf } from '../reducers/countReducer'
// import { createStore } from 'redux'


class Counter extends React.Component {
  
    render() {
        console.log(this.props.count)
        return (
            <div>
                <h1>Counter</h1>
                <p>This is a simple example of a React component.</p>
                <p>Current count: <strong>{this.props.count}</strong></p>
                {/* <button onClick={props.increment}>Increment</button> */}
            </div >
        )
    }

}

const mapStateToProps = state => {
    console.log('counter state', state)
    console.log('counter state 2', state.count)
    return {
        count: state.value
    }
}


export default connect(mapStateToProps)(Counter);