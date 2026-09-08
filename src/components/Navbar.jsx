import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../redux/CartSlice';
import { ShoppingCart, Sprout, Home, Info, Flower2 } from 'lucide-react';

const Navbar = () => {
  const totalQuantity = useSelector(selectTotalQuantity);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar-header">
      <nav className="navbar container">
        {/* Brand Logo & Name */}
        <Link to="/" className="navbar-brand" id="nav-brand">
          <div className="brand-icon-wrapper">
            <Sprout className="brand-icon" size={26} />
          </div>
          <div className="brand-text">
            <span className="brand-title">Paradise Nursery</span>
            <span className="brand-subtitle">Where Greenery Meets Serenity</span>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="navbar-links">
          <Link
            to="/"
            id="nav-home-link"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            <Home size={18} className="nav-link-icon" />
            <span>Home</span>
          </Link>

          <Link
            to="/plants"
            id="nav-plants-link"
            className={`nav-link ${isActive('/plants') ? 'active' : ''}`}
          >
            <Flower2 size={18} className="nav-link-icon" />
            <span>Plants</span>
          </Link>

          <Link
            to="/about"
            id="nav-about-link"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
          >
            <Info size={18} className="nav-link-icon" />
            <span>About Us</span>
          </Link>

          {/* Cart Button with dynamic quantity badge */}
          <Link
            to="/cart"
            id="nav-cart-link"
            className={`nav-cart-btn ${isActive('/cart') ? 'active' : ''}`}
            aria-label={`Shopping Cart with ${totalQuantity} items`}
          >
            <div className="cart-icon-wrapper">
              <ShoppingCart size={20} />
              {totalQuantity > 0 && (
                <span className="cart-badge" id="cart-badge-count">
                  {totalQuantity}
                </span>
              )}
            </div>
            <span className="cart-text">Cart ({totalQuantity})</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
