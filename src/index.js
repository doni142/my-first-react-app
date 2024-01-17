import React from 'react';
import ReactDOM from 'react-dom/client';
import App from'./App.js'
import { BrowserRouter } from "react-router-dom";

/* const main = {
  background: 'blue',
  height: '100vh',
  width: '100%',
}; 

const firstVariable = "Expert";
const secondVariable = " Developer";
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
  /*<>
    <div style={main}>
      <h1> { `We are ${firstVariable} ${secondVariable}`}</h1>
    </div>
 </>*/
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
