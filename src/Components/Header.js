import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart, FaUser, FaSignOutAlt, FaFilter, FaShoppingBag } from 'react-icons/fa';
import '../index.css'
import { useCart } from './CartContext';

function Header() {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((count, product) => count + product.quantity, 0);
 
  return (
    <div className='m-2'>
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start header-container">
       
          <div><span className="logo"><FaShoppingBag/><span className="p-2" style={{fontStyle:'italic'}}>Sale-Shop</span></span></div>
  

        <form className="nav col-lg-6 justify-content-left container-fluid" role="search">
          <div className="input-group"> 
            <input type="search" className="form-control form-control-dark text-bg-light" width="700px" placeholder="Search..." aria-label="Search" />
            <button className="btn btn-primary" type="submit">Search</button>
            <button className="btn btn-outline-light" type="button">
              <FaFilter size={20} />
            </button>
          </div>
        </form>

        <div className="text-end">
          <button className='btn'>
          <Link to='/cart'>
            <FaShoppingCart size={30} color='white'/><span className="cart-count rounded-circle bg-danger small px-1 text-white">{cartItemCount}</span>
          </Link>
          </button>
          <button type="button" className="btn btn-outline">
            <FaUser size={30} color='white'/>
          </button>

          <button type="button" className="btn btn-warning">
            <FaSignOutAlt size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
