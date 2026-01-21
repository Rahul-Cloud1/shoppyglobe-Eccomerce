// CartItem displays a single item in the cart and allows quantity adjustment and removal.
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const qty = Math.max(1, Number(e.target.value));
    dispatch(updateQuantity({ id: item.id, quantity: qty }));
  };

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8 }} loading="lazy" />
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>${item.price}</p>
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          style={{ width: 50 }}
        />
        <button onClick={() => dispatch(removeFromCart(item.id))} style={{ marginLeft: 8 }}>
          Remove
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
