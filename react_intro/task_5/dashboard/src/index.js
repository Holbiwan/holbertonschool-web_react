import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

console.log('Hello, Webpack!');
console.log('Hello, Babel!');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app') // Assurez-vous que l'ID correspond à celui de votre index.html
);
