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
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="product-detail-page"><p>Loading...</p></div>;
  if (error) return <div className="product-detail-page"><p style={{ color: 'red' }}>{error}</p></div>;
  if (!product) return null;

  return (
    <div className="product-detail-page">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} style={{ width: 240, height: 240, objectFit: 'cover', borderRadius: 8 }} loading="lazy" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
