import React, { useState } from 'react';
import Navbar from './navbar'
import { increment, decrement } from '../actions/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Plp = () => {
    
  const count = useSelector((c) => c.counter.value);

  return (
    <div className="plp-container">
      <Navbar/>
        <button onClick={useDispatch(increment())}>Incriment</button>
        <p>{count}</p>
        <button onClick={useDispatch(decrement())}>Decriment</button>
    </div>
  )
}

export default Plp