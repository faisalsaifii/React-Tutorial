import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Not using Web Vitals in this project
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') // Accessing the root div of the HTML file in the public folder
);
root.render(
  // Strict Mode helps developers by rendering the error message in the browser
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();