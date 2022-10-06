import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

//https://react-bootstrap.github.io/getting-started/introduction/#css
// {/* The following line can be included in your src/index.js or App.js file*/}
import 'bootstrap/dist/css/bootstrap.min.css';

// to custom bootstrap css we must but this scc file at the end (after "bootstrap.min.css" file)
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

