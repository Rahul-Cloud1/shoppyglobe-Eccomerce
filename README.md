# ShoppyGlobe E-commerce

**ShoppyGlobe** is a basic e-commerce web app built with **React 18** and **Vite**.  
It includes product listing, product details, cart management, checkout, Redux state management, and dynamic routing.


 GitHub Repository
[https://github.com/Rahul-Cloud1/shoppyglobe-Eccomerce](https://github.com/Rahul-Cloud1/shoppyglobe-Eccomerce)

Features
 Browse products fetched from [DummyJSON API](https://dummyjson.com/products)
Search and filter products
View product details
Add/remove products to/from cart
Update quantities (min 1) and view cart summary
Checkout form with "Place Order" button
404 page for unknown routes
Redux for state management
Lazy loading for components and images
Responsive UI

## Technologies
React 18, Vite, Redux Toolkit, React Router v6, Axios, CSS

 Structure
 src/
├── components/ # Header, ProductList, ProductItem, Cart, CartItem, Checkout, NotFound
├── pages/ # ProductDetail
├── redux/ # store.js, cartSlice.js
├── hooks/ # useFetchProducts.js
├── styles/ # main.css
├── App.jsx
└── index.jsx

Installation & Running

git clone https://github.com/Rahul-Cloud1/shoppyglobe-Eccomerce.git
cd shoppyglobe-Eccomerce
npm install
npm run dev
