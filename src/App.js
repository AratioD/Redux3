import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div>
        {/* redux 3 testing */}
        <Counter count={33} />
      </div>
    );
  }
}

export default App;
 