import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../redux/productSlice';
import { Link } from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();
  const search = useSelector(state => state.products.search);
  const handleSearch = (e) => {
    e.preventDefault();
    // Optionally, scroll to product list or focus
  };
  return (
    <header className="header">
      <div className="logo-area">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/vite.svg" alt="ShoppyGlobe Logo" className="logo-img" />
          <span className="logo-text">ShoppyGlobe</span>
        </Link>
      </div>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => dispatch(setSearch(e.target.value))}
        />
        <button type="submit" aria-label="Search">
          <span role="img" aria-label="search">🔍</span>
        </button>
      </form>
      <nav>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
        </ul>
      </nav>
      <div className="cart-icon">
        <Link to="/cart">
          <span role="img" aria-label="cart" className="cart-emoji">🛒</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
