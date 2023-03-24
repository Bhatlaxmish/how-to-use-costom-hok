import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import ProductsProvider from './context/products-context';
import configurestore from './hooks-store/products-store';
configurestore();
ReactDOM.render(
  // <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
  {/* </ProductsProvider>, */}
