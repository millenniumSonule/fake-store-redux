import React, { useEffect } from 'react'
import Navbar from './navbar'
import { useSelector,useDispatch } from 'react-redux'
import products, { getProducts } from './redux/productsAPIcall'

const Plp = () => {

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getProducts);
  }, [dispatch]);


  return (
    <div className="homepage-container">
      <div className="nav-bar-container">
        <Navbar/>
      </div>
      <div className="plp-container">
          
      </div>
    </div>
  )
}

export default Plp;