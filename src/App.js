import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import store from './store/';

class App extends Component {
  

  render() {
    console.log('store', store)
    return (
      <div>
        {/* redux 3 testing */}
     
        <Counter store={store} />
   
      </div>
    );
  }
}

export default App;
 