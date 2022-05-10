import React,{useState,useEffect} from 'react';
import {useGetCryptosQuery} from "../Services/Cryptoapione";
import millify from "millify";
import { Link } from 'react-router-dom';
import Footer from "./Footer";

const Coins = ({simplified}) => {
  const displaycount = simplified ? 10 :100;
  const { data:Cryptolistdatum, isFetching } = useGetCryptosQuery(displaycount);
  const cryptostats =Cryptolistdatum?.data?.coins;
  
  const [cryptos,setCryptos] = useState(cryptostats);
  const [searchterm,setsearchterm] = useState('');

  console.log(Cryptolistdatum);

  useEffect(()=>{
    const filtereddata = Cryptolistdatum?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchterm.toLowerCase()));
    setCryptos(filtereddata);
  },[ Cryptolistdatum,searchterm]);

  if(isFetching) return "loading...";
  
  return (
    <>
    {!simplified && (
      <div className='flex md:flex-row flex-col justify-between items-center mt-4 mx-4 mb-4'>
      <h1 className='text-start text-whiter1 mt-2 text-4xl'>Cryptocurrencies</h1>
      <div className="flex justify-center mt-2">
        <div className="mb-3 xl:w-96">
          <input
            type="search"
            className="
              form-control
              w-72
              px-3
              py-1.5
              text-base
              font-normal
              text-whiter1
              bg-darkgreyer
            
              rounded-sm
              transition
              ease-in-out
              backdrop-filter backdrop-blur-lg bg-opacity-60 
              focus:border-blue-600 focus:outline-none
            "
            id="exampleSearch"
            placeholder="Search cryptos"
            onChange={(e)=>setsearchterm(e.target.value)}
          />
         </div>
        
      </div>
      </div>
    )}
    
    
    <div className='flex flex-col space-y-1 mt-1 mx-2 '>
    <div className={`flex flex-row justify-between items-center w-full h-14 px-4 text-base font-normal ${simplified?'text-darkgreyer':'text-whiter1'}`}>
      <h1 className='basis-1/4'>Name</h1>
      <h1>Price(USD)</h1>
      <h1>Market Cap</h1>
      <h1>24h change</h1>
    </div>
    { cryptos?.map((currency)=>(
 
      <div key={currency.uuid} className='flex flex-row justify-between items-center w-full h-14 rounded-md bg-whiter hover:drop-shadow-2xl transition ease-in-out  duration-450 px-4 md:font-medium font-normal md:text-xl text-lg'>
       
       <Link className='basis-1/4 ' to={`/Extra/${currency.uuid}`}><div className='flex flex-row items-center space-x-2'><img className='h-5 w-5  ' src={currency.iconUrl}/><h1>{currency.name}</h1></div></Link>
          <h1>{millify(currency.price)}</h1>
          <h1>{millify(currency.marketCap)}</h1>
          <h1>{millify(currency.change)}%</h1> 
      </div> 
    ))}
      
      
  </div>
  {!simplified && ( <Footer/>)}</>
    
  )
}

export default Coins