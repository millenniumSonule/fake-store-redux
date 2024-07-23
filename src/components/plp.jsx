import React, { useState } from 'react';
import Navbar from './navbar'

const Plp = () => {
    
  const [count, setCount] = useState(0);

  const Incriment = () => {
    setCount(count+1);
  }

  const Decrement = () => {
    setCount(count-1);
  }

  return (
    <div className="plp-container">
      <Navbar/>
        <button onClick={Incriment}>Incriment</button>
        <p>{count}</p>
        <button onClick={Decrement}>Decriment</button>
    </div>
  )
}

export default Plp