import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import counterStore from './counterStore';
import { CounterProvider } from './context/counterContext';

const store = new counterStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CounterProvider value={store}>
    <App/>
  </CounterProvider>
);

reportWebVitals();
