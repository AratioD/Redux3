import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import store from './store/Store';

class App extends Component {
  render() {
    return (
      <div>
        {/* redux 3 testing */}
        <Counter store={store} />
      </div>
    );
  }
}

export default App;
 