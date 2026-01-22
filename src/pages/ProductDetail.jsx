// ProductDetail fetches and displays details for a single product and allows adding it to the cart.
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error('Failed to fetch product');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        setAdded(false); // Reset added state when product changes
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="product-detail-page"><p>Loading...</p></div>;
  if (error) return <div className="product-detail-page"><p style={{ color: 'red' }}>{error}</p></div>;
  if (!product) return null;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };
  return (
    <div className="product-detail-page animated-detail">
      <div className="detail-img-wrap">
        <img src={product.thumbnail} alt={product.title} className="detail-img" loading="lazy" />
        <span className="detail-price-badge">${product.price}</span>
      </div>
      <div className="detail-info">
        <h2>{product.title}</h2>
        <p className="detail-desc">{product.description}</p>
        <button className={`add-to-cart-btn${added ? ' added' : ''}`} onClick={handleAddToCart} disabled={added}>
          {added ? '✔ Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
export default ProductDetail;
