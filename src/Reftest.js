import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import MyRoute from './example';
import * as serviceWorker from './serviceWorker';

class Test extends React.Component{
  constructor(props){
    super(props);
    this.reftest=React.createRef();
    this.seffocus=this.setfocus.bind(this);
  }
  setfocus=()=>{
    this.reftest.current.focus();
  }
  render(){
  return(
     <div>
      <h1 ref={this.reftest}>Affect will happen<h1/>
      <input type='button' onClick={this.setfocus}/>
     </div>
  );
  }
  }

serviceWorker.unregister();
