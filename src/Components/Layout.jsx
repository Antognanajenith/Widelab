import React from 'react';
import {Routes ,Route,Link} from "react-router-dom";
import Exchanges from './Exchanges';
import News from './News';
import Home from './Home';
import Coins from './Coins';
import Extra from './Extra';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className='flex  w-screen md:w-full bg-lightgreyer min-h-screen'>
      <div className=' w-screen md:w-full h-56 md:rounded-t-lg rounded-b-xl bg-blacker '> 
          <Routes >
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/News" element={<News/>} />
              <Route exact path="/Exchanges" element={<Footer/>} />  
              <Route exact path="/Coins" element={<Coins/>} />            
              <Route exact path="/Extra/:coinId" element={<Extra/>} />  
          </Routes >
      </div>
    </div>
  )
}

export default Layout;

