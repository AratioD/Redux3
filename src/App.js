import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
// import store from './store/';

class App extends Component {


  render() {
    // // <Provider store={store}>
    // console.log('app store', store.getState())
    // console.log(store.getState().count)
    return (
      <div>
        <Counter count={99} />
      </div>
    );
  }
}

export default App;
