import logo from '../assets/logo.svg';

import { Pluralize } from '../utils/textulize'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom';

import Auth from '../utils/auth'

const Header = () => {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const { cartItems } = useCart()

  return (
    <div className='header'>
      <div className='logo-section'>
        <Link className="" to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <h1>Quick and Dirty Shop</h1>
      </div>
      <div className='cart-section'>
        {cartItems.length > 0 ? (
          <div className='cart-items'>
            <div className='cart-items-count'>{cartItems.length} {Pluralize(cartItems.length, 'item', 'items')}</div>
            <Link className="" to="/basket">
              <div className='App-link'>View Basket</div>
            </Link>
          </div>
        ) : (
        <div className='cart-items'>
            <div className='cart-items-count'>Your Cart is Empty</div>
          </div>
        )}
        
      </div>
      <div className='login-section'>
      {Auth.loggedIn() ? (
          <>
           <Link className="text-sm m-2" to="/me">
              {Auth.getProfile().data.username}
            </Link>
            <button className="text-sm m-2" onClick={logout}>
              Logout
            </button>
          </>
      ) : (
        <>
        <Link className="m-2 text-sm" to="/login">
          Login
        </Link>
        |
        <Link className="m-2 text-sm" to="/signup">
          Signup
        </Link>
        </>
      )}
      </div>
    </div>
  )
}

export default Header
