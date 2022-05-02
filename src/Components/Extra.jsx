import ReactExtra,{useState} from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";
import HTMLReactParser from "html-react-parser";
import { useParams } from 'react-router-dom';

import {useGetCryptoDetailsQuery} from "../Services/Cryptoapione";

const Extra = () => {

  const {coinId} = useParams();
  const [timeperiod,settimeperiod] = useState("7d");
  const {data,isFetching} = useGetCryptoDetailsQuery(coinId);
  const cryptoDetails  = data?.data?.coin;
  const anand ={
    "hmm":"ada parra",
  }
  
  if(isFetching){
    console.log(timeperiod);
    console.log(anand.hmm);
    console.log(data);
    return "loading";
  }
 

  return (
   
    <div>
      <div className='flex h-6 w-10 rounded-md  bg-whiter m-2  justify-center '>
      <Link  to="/Coins">
      <MdArrowBack />
        </Link>
        
      </div>
      <h1 className='text-whiter my-4 mt-8 mx-12 text-3xl'>name</h1>
      <div className='flex flex-col gap-4 m-16 mt-8'>
        <div className="flex flex-row  gap-8 ">
          <div className='flex basis-2/5 bg-whiter h-28 rounded-xl flex-col p-3 gap-2'>
            <h1 className='text-xl text-greyer'>AAPL </h1>
            <div className='flex flex-row justify-between items-center'>
              <h1 className='text-3xl '>$ current price</h1>
              <h1 className='text-base text-greyer font-medium'>- Deviation</h1>
            </div>
          </div>
          <div className='flex basis-3/5 bg-yellow-400 h-28 rounded-xl flex-row justify-around items-center'>
            <h1>ada</h1>
            <h1>ada</h1>
            <h1>ada</h1>
          </div>
        </div>
        <div className='flex flex-row gap-8'>
          <div className='flex basis-4/6 bg-pink-400 h-[24rem] rounded-xl '>hmm</div>
          <div className='flex basis-2/6 flex-col h-[24rem] gap-4 '>
            <div className='rounded-xl basis-4/6 bg-lime-400 p-4 pl-6'>
              <h1 className='mt-2'>Details</h1>
              <h1 className='text-darkgreyer text-base'>hamma</h1>
              <h1 className='text-darkgreyer text-base'>hamma</h1>
              <h1 className='mt-2 text-base'>Other Details</h1>
              <h1 className='text-darkgreyer text-base'>hamma</h1>
              <h1 className='text-darkgreyer text-base'>hamma</h1>
              <h1 className='mt-4 text-violeter text-base'>View more ›</h1>
            </div>
            <div className='rounded-xl basis-2/6 bg-lime-600 flex flex-col'>
              <div className='bg-green-400 basis-1/2  items-center rounded-t-xl'><h1 className='text-center pt-4'>Current price</h1></div>
              <div className='flex flex-row bg-green-200 basis-1/2 items-center justify-around rounded-b-xl'>
                <button className='rounded bg-violeter justify-center   w-24 h-8 text-base text-whiter '>
                  BUY
                </button>
                <button className='rounded bg-violeter justify-center w-24 h-8 text-base text-whiter '>
                  SELL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Extra