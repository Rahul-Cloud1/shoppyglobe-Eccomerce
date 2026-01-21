import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  search: '',
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setProducts, setLoading, setError, setSearch } = productSlice.actions;
export default productSlice.reducer;
