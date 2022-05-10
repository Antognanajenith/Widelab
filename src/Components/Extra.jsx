import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";
import HTMLReactParser from "html-react-parser";
import { useParams } from 'react-router-dom';
import millify from 'millify';
import Linechart from "./Linechart";
import {useGetCryptoDetailsQuery,useGetCryptoHistoryQuery} from "../Services/Cryptoapione";

const Extra = () => {

  const {coinId} = useParams();
  const [timePeriod,settimeperiod] = useState("3h");
  const [basam,setbasam] = useState("basamma");
  const {data,isFetching} = useGetCryptoDetailsQuery(coinId);
  const timeDummy = "12d";
  const {data:histodatum} = useGetCryptoHistoryQuery(coinId,timeDummy);
  const cryptoDetails  = data?.data?.coin;
  const anand ={
    "hmm":"ada parra",
  };

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  
  if(isFetching){
    console.log(timePeriod);
    console.log(anand.hmm);
    console.log(histodatum);
    console.log(timeDummy);
    return "loading";
  }
 

  return (
   
    <div>
      <div className='flex h-6 w-10 rounded-md  bg-whiter m-2  justify-center '>
      <Link  to="/Coins">
      <MdArrowBack />
        </Link>
        
      </div>
      <h1 className='text-whiter my-4 mt-8 md:mx-12 mx-8 text-4xl'>{cryptoDetails.name}</h1>
      <div>
      <div className='flex flex-col gap-4 md:m-16 md:mt-6 mt-6 mx-4'>
        <div className="flex md:flex-row flex-col gap-8 ">
          <div className='flex basis-2/5 bg-whiter h-28 rounded-xl flex-col p-3 gap-2 drop-shadow-sm'>
            <h1 className='text-xl text-greyer'>{cryptoDetails.symbol}</h1>
            <div className='flex flex-row justify-between items-center'>
              <h1 className='text-3xl '>{millify(cryptoDetails.price,{ precision: 3 })}$</h1>
              <h1 className={`text-base font-medium ${millify(cryptoDetails.change)>0?'text-green-500':'text-red-500'}`}>{millify(cryptoDetails.change,{ precision: 3 })}%</h1>
            </div>
          </div>
          <div className='flex basis-3/5 bg-whiter h-28 rounded-xl flex-col justify-evenly pl-4 drop-shadow-sm'>
          <h1 className='text-lg font-medium text-left text-greyer'>TIME STAMP</h1>
           <div className="flex flex-row items-center pb-3">
            <select defaultValue={"3h"} className="" placeholder="Select Timeperiod" onChange={(e)=>{settimeperiod(e.target.value)         
              
            }}>
                {time.map((date) => (
                <option key={date} value={date}>{date}</option>
                ))}
              </select>
            <h1>{timePeriod}</h1>
            </div>
          </div>
        </div>
        <div className='flex md:flex-row flex-col gap-8'>
          <div className='flex basis-4/6 bg-whiter md:h-[25rem]  h-[30rem] rounded-xl drop-shadow-sm '>
          <Linechart coinHistory={histodatum} currentPrice={millify(cryptoDetails.price,{ precision: 3 })} coinName={cryptoDetails.name}/>
            
          </div>
          <div className='flex basis-2/6 flex-col md:h-[25rem]  h-[30rem] gap-4 drop-shadow-sm'>
            <div className='rounded-xl basis-4/6 bg-whiter p-4 pl-6'>
              <h1 className='mt-1 text-xl text-darkgreyer'>{cryptoDetails.symbol} - DETAILS</h1>
              <div className='text-darkgreyer text-base flex flex-row justify-between'>
                <h1 className='font-medium text-sm'>Market Cap</h1>
                <h1>{millify(cryptoDetails.marketCap,{ precision: 3 })}</h1>
              </div>
              <div className='text-darkgreyer text-base flex flex-row justify-between'>
                <h1 className='font-medium text-sm'>24h Volume</h1>
                <h1>ada</h1>
              </div>
              <div className='text-darkgreyer text-base flex flex-row justify-between'>
                <h1 className='font-medium text-sm'>All-time high</h1>
                <h1>{millify(cryptoDetails.allTimeHigh.price,{ precision: 3 })}</h1>
              </div>
              <h1 className='mt-2 text-base text-darkgreyer'>Other Statistics</h1>
              <div className='text-darkgreyer text-base flex flex-row justify-between'>
                <h1 className='font-medium text-sm'>Number of markets</h1>
                <h1>{millify(cryptoDetails.numberOfMarkets,{ precision: 3 })}</h1>
              </div>
              <div className='text-darkgreyer text-base flex flex-row justify-between'>
                <h1 className='font-medium text-sm'>Number Of Exchanges</h1>
                <h1>{millify(cryptoDetails.numberOfExchanges,{ precision: 3 })}</h1>
              </div>
              <h1 className='mt-4 text-violeter text-base'><a href={`${cryptoDetails.websiteUrl}`}>View more ›</a></h1>
             
            </div>
            <div className='rounded-xl basis-2/6 bg-lime-600 flex flex-col divide-y drop-shadow-sm'>
              <div className='bg-whiter basis-1/2  items-center rounded-t-xl flex flex-col'>
                <h1 className='text-center pt-2'>{millify(cryptoDetails.price,{ precision: 3 })}$</h1>
                <h1 className='text-center text-sm text-greyer font-extralight'>*current price</h1>
                </div>
              <div className='flex flex-row bg-whiter basis-1/2 items-center justify-evenly rounded-b-xl md:pb-0 pb-4 pt-1'>
                <button className='rounded bg-violeter justify-center   w-24 h-8 text-base text-whiter '>
                <a  href="https://www.binance.com/en/markets">
                  Buy
                  </a>
                </button>
                <button className='rounded bg-lightvioleter justify-center w-24 h-8 text-base text-violeter '>
                  <a  href="https://www.binance.com/en/markets">
                    SELL
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Extra;

//https://www.binance.com/en/trade/ADA_USDT