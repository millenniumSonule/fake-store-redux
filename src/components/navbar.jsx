import React from 'react';
import { NavLink } from 'react-router-dom';
import cartImg from './Assets/cart.png';

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="nav-items">
        <li><NavLink to="/" activeClassName="active">Homepage</NavLink></li>
        <li className="cart-nav">
          <NavLink to="/cart" activeClassName="active">
            <img src={cartImg} alt="Cart" />
            Cart
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
