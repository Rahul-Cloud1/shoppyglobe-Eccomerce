// ProductItem displays a single product and allows adding it to the cart.
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const [added, setAdded] = React.useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500); // Optionally reset after 1.5s
  };

  return (
    <div className="product-item">
      {/* Example badge for new products (could be dynamic) */}
      {product.isNew && <span className="product-badge">New</span>}
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          style={{ width: 180, height: 180, objectFit: 'cover', borderRadius: 8 }}
        />
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
      </Link>
      <button
        onClick={handleAddToCart}
        className={`add-to-cart-btn${added ? ' added' : ''}`}
        style={{ marginTop: 8 }}
        disabled={added}
      >
        {added ? '✔ Added' : 'Add to Cart'}
      </button>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;
