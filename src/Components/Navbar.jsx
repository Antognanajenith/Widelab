import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
import icon from "../Assets/widelab.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";


const Navbar = () => {

  const [sidebar,setsidebar] = useState(false);
  console.log(sidebar);
  return (
    <div className=' md:fixed md:left-0 md:w-1/5 md:h-full h-20 w-screen pt-6  md:bg-gradient-to-b bg-gradient-to-r from-[#dfe9f3] to-white   z-10 '>
      <div className='md:mx-8 flex flex-row just justify-between mx-6'>
        <Link to="/" className='flex flex-row items-center justify-center gap-x-2'>
          <img src={icon} className="h-8"alt="widelab icon" />
          <h2 className='tracking-wider text-center'>WIDELAB</h2>
        </Link>
        <div>
          {!sidebar && <HiMenuAlt3 className='md:hidden' onClick={()=>setsidebar(!sidebar)}/>}
          {sidebar && <GrClose className='md:hidden'   onClick={()=>setsidebar(!sidebar)}/>}
        
        </div>
        <div className={`absolute top-[79px]  md:hidden ${sidebar?' right-[0rem] opacity-100 rounded-bl-2xl':'right-[-12rem] opacity-0 rounded-bl-0'} rounded-bl-2xl w-48  bg-whiter transition-all duration-500 ease-in-out z-0`}>
          <div className='flex flex-col gap-2 p-3 divide-y-1'>
            <Link className='hover:text-blacker focus:bg-lightvioleter rounded-md py-2 px-4  focus:text-violeter' to="/Coins" onClick={()=>setsidebar(!sidebar)}>Coins</Link>
            <Link className='hover:text-blacker focus:bg-lightvioleter rounded-md py-2 px-4  focus:text-violeter' to="/News" onClick={()=>setsidebar(!sidebar)}>news</Link>
          </div>
        </div>
        
      </div>
      <div className='flex justify-center'> 
      </div>
      <div className='mt-10 mx-8 '>
        <div className='md:flex flex-col text-base text-darkgreyer font-medium space-y-1 hidden '>
          <Link className='hover:text-blacker focus:bg-lightvioleter rounded-md py-2 px-4 focus:text-violeter' to="/" >Home</Link>
          <Link className='hover:text-blacker focus:bg-lightvioleter rounded-md py-2 px-4  focus:text-violeter' to="/Coins">Coins</Link>
          <Link className='hover:text-blacker focus:bg-lightvioleter rounded-md py-2 px-4  focus:text-violeter' to="/News">news</Link>
         

        </div>
      </div>
      <div className=' absolute bottom-0  w-full md:flex  flex-col p-4 space-y-4 hidden'>
          <div className='md:flex flex-col text-base text-darkgreyer font-medium justify-start hidden '>
           
          </div>
          <div className='flex flex-row justify-center space-x-3'>
                <button className='md:rounded md:bg-violeter md:justify-center md:w-24 md:h-9 text-base text-whiter hidden'>
                 Login
                </button>
                <button className='md:rounded md:bg-violeter md:justify-center md:w-24 md:h-9 text-base text-whiter hidden'>
                  Sign in 
                </button>
          </div>
      </div>
      
      
    </div>
  )
}

export default Navbar;