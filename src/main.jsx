
import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

const App = lazy(() => import('./App'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const Checkout = lazy(() => import('./components/Checkout'));
const NotFound = lazy(() => import('./components/NotFound'));

const ProductList = lazy(() => import('./components/ProductList'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <ProductList />,
      },
      {
        path: 'product/:id',
        element: <ProductDetail />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);


function Main() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  );
}


export default Main;

// Mount Main to the DOM
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Main />);
}
