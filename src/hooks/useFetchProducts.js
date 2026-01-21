import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts, setLoading, setError } from '../redux/productSlice';

const useFetchProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(true));
      try {
        const res = await fetch('https://dummyjson.com/products');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        dispatch(setProducts(data.products));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };
    fetchProducts();
  }, [dispatch]);
};

export default useFetchProducts;
