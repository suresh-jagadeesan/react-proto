import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrement, increment, reset } from '../actions';

const Counter = (props) => {
    return (
        <div style={{ paddingBottom: '50px' }}>
            {props.count}
            <button id="increment-button" onClick={ () => props.increment() }>+</button>
            <button id="decrement-button" onClick={ () => props.decrement() }>-</button>
            <button id="reset-button" onClick={ () => props.reset() }>Reset</button>
        </div>
    );
}

function mapStateToProps({ counter }) {
    return { count: counter.count };
}
  
export default connect(mapStateToProps, { decrement, increment, reset })(Counter);