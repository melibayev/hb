import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SizeWindowProvider } from './components/context/SizeWindowContext';
import { CartProvider } from './components/context/CartContext';
import { LikeProvider } from './components/context/LikeContext';
import { RemoveLikeProvider } from './components/context/RemoveLikeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RemoveLikeProvider>
        <LikeProvider>
          <SizeWindowProvider>
            <App />
          </SizeWindowProvider>
        </LikeProvider>
      </RemoveLikeProvider>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
