import React from 'react'
import Cart from './components/cart'
import Homepage from './components/plp'
import './components/components.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
const App = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
     </BrowserRouter>
  )
}

export default App