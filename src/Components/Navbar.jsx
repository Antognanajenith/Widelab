import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-1/5 h-full bg-whiter z-10'>
      <div className='my-8 text-center '>
        <Link to="/">
          <h2 className='tracking-wider'>WIDELAB</h2>
        </Link>
      </div>
      <div className='flex justify-center'>
        <button className='rounded bg-violeter justify-center w-48 h-10 text-base text-whiter '>
          Request
        </button>
      </div>
      <div className='mt-10 mx-8 '>
        <div className='flex flex-col text-base text-darkgreyer font-medium space-y-1 '>
          <Link className='hover:text-blacker focus:bg-lightvioleter rounded-md py-2 px-4 focus:text-violeter' to="/" >Home uh</Link>
          <Link className='hover:text-blacker focus:bg-lightvioleter rounded-md py-2 px-4  focus:text-violeter' to="/Coins">Coins</Link>
          <Link className='hover:text-blacker focus:bg-lightvioleter rounded-md py-2 px-4  focus:text-violeter' to="/News">news</Link>
          <Link className='hover:text-blacker focus:bg-lightvioleter rounded-md py-2 px-4  focus:text-violeter' to="/Exchanges">exchanges</Link>
          <Link className='hover:text-blacker focus:bg-lightvioleter rounded-md py-2 px-4  focus:text-violeter' to="/Extra}">extra</Link>

        </div>
      </div>
      <div className=' absolute bottom-0  w-full flex  flex-col p-4 space-y-4'>
          <div className='flex flex-col text-base text-darkgreyer font-medium justify-start '>
            <button className='flex justify-start mx-8' >Help</button>
            <button className='flex justify-start mx-8' >Settings</button>
          </div>
          <div className='flex flex-row justify-center space-x-3'>
                <button className='rounded bg-violeter justify-center w-24 h-9 text-base text-whiter '>
                 Login
                </button>
                <button className='rounded bg-violeter justify-center w-24 h-9 text-base text-whiter '>
                  Sign in 
                </button>
          </div>
      </div>
    </div>
  )
}

export default Navbar;