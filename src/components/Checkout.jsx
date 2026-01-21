// Checkout collects user details, shows a summary, places the order, clears the cart, and redirects to Home.
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [form, setForm] = useState({ name: '', address: '', email: '' });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setOrderPlaced(true);
    dispatch(clearCart());
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  if (orderPlaced) {
    return <div className="checkout-page"><h2>Order placed</h2><p>Redirecting to Home...</p></div>;
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: 8, width: '100%' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: 8, width: '100%' }}
        />
        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
          style={{ display: 'block', marginBottom: 8, width: '100%' }}
        />
        <button type="submit">Place Order</button>
      </form>
      <div className="checkout-summary" style={{ marginTop: 24 }}>
        <h3>Order Summary</h3>
        {items.length === 0 ? <p>No items in cart.</p> : (
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.title} x {item.quantity} = ${item.price * item.quantity}</li>
            ))}
          </ul>
        )}
        <h4>Total: ${total.toFixed(2)}</h4>
      </div>
    </div>
  );
}

export default Checkout;
