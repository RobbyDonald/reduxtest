import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./counter.js";
import store from "./index.js";


class App extends React.Component{
  render() {
    return(
      <div className='App'>
        <Counter store={store}  />
      </div>
    );
  }
}

export default App;