// ProductList fetches and displays a list of products, supports searching, and renders ProductItem for each.
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useFetchProducts from '../hooks/useFetchProducts';
import { setSearch } from '../redux/productSlice';
const ProductItem = React.lazy(() => import('./ProductItem'));

function ProductList() {
  useFetchProducts();
  const dispatch = useDispatch();
  const { products, search, loading, error } = useSelector(state => state.products);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-list-page">
      <h2>Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => dispatch(setSearch(e.target.value))}
        style={{ marginBottom: 16, padding: 8, width: '100%' }}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="product-list">
        {filteredProducts.map(product => (
          <React.Suspense fallback={<div>Loading...</div>} key={product.id}>
            <ProductItem product={product} />
          </React.Suspense>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
