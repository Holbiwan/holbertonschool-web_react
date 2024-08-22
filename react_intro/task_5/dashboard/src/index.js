import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => <h1>Bienvenue sur votre tableau de bord React avec Webpack!</h1>;

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
