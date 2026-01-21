// Cart displays all items in the cart, the total, and a link to checkout.
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const CartItem = React.lazy(() => import('./CartItem'));

function Cart() {
  const items = useSelector(state => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <span className="cart-badge">🛒 Cart</span>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map(item => (
              <React.Suspense fallback={<div>Loading...</div>} key={item.id}>
                <CartItem item={item} />
              </React.Suspense>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${total.toFixed(2)}</h3>
            <Link to="/checkout">
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
