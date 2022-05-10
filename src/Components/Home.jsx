import React from 'react';
import millify from "millify";
import {Link} from "react-router-dom";
import {useGetCryptosQuery} from "../Services/Cryptoapione";
import Coins from './Coins';
import News from './News';
import Footer from "./Footer";



const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats =data?.data?.stats;

  if(isFetching) return "loading...";


  return (
    <div className='text-center'>
    
       <div className='md:my-10 md:mx-6 my-8 mx-2 flex flex-row  flex-wrap'>
        <table className="table-auto w-full text-whiter1 md:text-4xl text-2xl">
            <thead>
              <tr>
                <th className='basis-1'>{millify(globalStats.total)}</th>
                <th>{millify(globalStats.totalMarketCap)}</th>
                <th>{millify(globalStats.total24hVolume)}</th>
                <th>{millify(globalStats.totalExchanges)}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='font-medium text-sm'>Cryptos listed</td>
                <td className='font-medium text-sm'>Total Market cap</td>
                <td className='font-medium text-sm'>Total 24h Volume</td>
                <td className='font-medium text-sm'>Total Exchanges</td>
              </tr>
            </tbody>
          </table>
       </div>
       <div className='mt-16 md:m-4 md:p-4 m-4 p-2 mx-2 px-2 bg-whiter rounded-lg divide-y'>
        <div className='flex justify-between items-center '>
          <h1 className='text-3xl'>Market trend</h1> 
          <Link className='hover:text-blacker' to="/Coins"><h1 className='md:text-lg text-sm text-violeter'>View more › </h1></Link>
         
         </div>
         <Coins simplified/>
         <div className='flex justify-between mt-6 items-center '>
          <h1 className='text-3xl'>Crypto news</h1> 
          <Link className='hover:text-blacker' to="/News"><h1 className='md:text-lg text-sm text-violeter'>View more › </h1></Link>
         </div>
        <News simplified/>
       </div>
      <Footer/>
      
    </div>
  )
}

export default Home;