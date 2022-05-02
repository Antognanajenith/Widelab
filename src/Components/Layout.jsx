import React from 'react';
import {Routes ,Route,Link} from "react-router-dom";
import Exchanges from './Exchanges';
import News from './News';
import Home from './Home';
import Coins from './Coins';
import Extra from './Extra';

const Layout = () => {
  return (
    <div className='flex  w-full bg-lightgreyer min-h-screen'>
      <div className='w-full h-56 rounded-t-lg  bg-blacker '> 
          <Routes >
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/News" element={<News/>} />
              <Route exact path="/Exchanges" element={<Exchanges/>} />  
              <Route exact path="/Coins" element={<Coins/>} />            
              <Route exact path="/Extra/:coinId" element={<Extra/>} />  
          </Routes >
      </div>
    </div>
  )
}

export default Layout;

