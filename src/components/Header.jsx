import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
        </ul>
      </nav>
      <div className="cart-icon">
        <Link to="/cart">
          <span role="img" aria-label="cart">🛒</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
