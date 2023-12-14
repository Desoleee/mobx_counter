import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import counterStore from './counterStore';

const store = new counterStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App myCounter={store}/>
);

reportWebVitals();
