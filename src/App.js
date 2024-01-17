import React, { useEffect, useState } from 'react';
import './App.css';
import Counter from "./Components/Counter";
import Header from "./Components/Header";
import "./Counter.css";
import Home from './Components/Home';
import About from './Components/About';
import {Route, Routes} from 'react-router-dom';
import Error from './Components/Errorpage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <>
            <Header />
            <Home />
          </>
        }
      />
      
      <Route path='/about' element={
            <>
              <Header />
              <About />
            </>
          }
        />
        <Route path='*' element={
          <>
            <Error />
          </>
          }
        >

        </Route>
    </Routes>  
    </>
  );
}
//<div className="main"><Header /><Counter /></div>

export default App;
