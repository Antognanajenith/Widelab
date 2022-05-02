import React from 'react';
import millify from "millify";
import {Link} from "react-router-dom";
import {useGetCryptosQuery} from "../Services/Cryptoapione";
import Coins from './Coins';
import News from './News';




const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats =data?.data?.stats;

  if(isFetching) return "loading...";


  return (
    <div className='text-center'>
    
       <div className='my-10 mx-6'>
        <table className="table-fixed w-full text-whiter1 text-4xl">
            <thead>
              <tr>
                <th>{millify(globalStats.total)}</th>
                <th>{millify(globalStats.totalMarketCap)}</th>
                <th>{millify(globalStats.total24hVolume)}</th>
                <th>{millify(globalStats.totalExchanges)}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='font-medium text-sm'>Cryptocurrencies listed</td>
                <td className='font-medium text-sm'>Total Market cap</td>
                <td className='font-medium text-sm'>Total 24h Volume</td>
                <td className='font-medium text-sm'>Total Exchanges</td>
              </tr>
            </tbody>
          </table>
       </div>
       <div className='mt-16 m-4 p-4 bg-whiter rounded-lg divide-y'>
        <div className='flex justify-between '>
          <h1 className='text-3xl'>Market trend</h1> 
          <Link className='hover:text-blacker' to="/Coins"><h1 className='text-lg hover:text-violeter'>View more › </h1></Link>
         
         </div>
         <Coins simplified/>
         <div className='flex justify-between mt-6 '>
          <h1 className='text-3xl'>Crypto news</h1> 
          <Link className='hover:text-blacker' to="/News"><h1 className='text-lg hover:text-violeter'>View more › </h1></Link>
         </div>
        <News simplified/>
       </div>
      
      
    </div>
  )
}

export default Home;