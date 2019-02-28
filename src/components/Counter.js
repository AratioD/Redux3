import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  
    render() {
        console.log(this.props.count)
        return (
            <div>
                <h1>Counter</h1>
                <p>This is a simple example of a React component.</p>
                <p>Current count: <strong>{this.props.count}</strong></p>
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.decrement}>Decrement</button>
            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

const mapDipachToProps = dispatch => {
    return {
      increment: () => dispatch({ type: "INCREMENT", value: 1 }),
      decrement: () => dispatch({ type: "DECREMENT", value: 1 })
    };
  };

export default connect(mapStateToProps, mapDipachToProps)(Counter);