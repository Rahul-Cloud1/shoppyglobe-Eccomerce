import './App.css';
import './styles/main.css';

import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import ProductList from './components/ProductList';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
