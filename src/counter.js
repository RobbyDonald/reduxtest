import React from 'react';
import { connect } from 'react-redux';


function Counter(props){
  return(
    <div className="magic">
      <h1> From now on, Mr Leem is going to make a magic.</h1>
      <h2>{props.count}</h2>
      <button onClick={props.onIncrementClick}>Click here.</button>
    </div>
  );
}

function mapStateToProps(state){
  return {
    count:state.count
  }
}

function mapDispatchToProps(dispatch){
  return {
    onIncrementClick : () => {
      const action={ type : 'INCREMENT' };
      dispatch(action);
    }
  }   
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
