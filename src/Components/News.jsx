import React,{useState} from 'react';
import {useGetNewsQuery} from "../Services/Cryptonewsapi";
import {useGetCryptosQuery} from "../Services/Cryptoapione";
import Footer from "./Footer";
import moment from "moment";


const News = ({simplified}) => {

  const [searchterm,setSearchterm] = useState('Cryptocurrency');
  const demoimage = "https://ichef.bbci.co.uk/news/976/cpsprodpb/B04B/production/_118713154_gettyimages-897291236.jpg";
  const demoprovidericon ="https://www.bing.com/th?id=ODF.uKYAZUJNp2N8qQ81U_MEuw&pid=news";
  const { data:Cryptolistdatum } = useGetCryptosQuery(100);
  const { data:Newslistdatum, isFetching } = useGetNewsQuery({newsCategory:searchterm,count:simplified?6:30});
      if (isFetching) {
       return "loading";
      };
  console.log(searchterm);
  
  return (
   <>
   {!simplified && (
     <>
      <div className='flex flex-row justify-between items-center mt-6 mx-4 mb-4'>
      <h1 className='text-start text-whiter1  text-4xl'>News</h1>
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <select class="form-control md:w-72 w-40 px-3 py-1.5 text-base font-normal text-whiter1 bg-darkgreyer rounded-sm transition ease-in-out
              backdrop-filter backdrop-blur-lg bg-opacity-60 focus:border-blue-600 focus:outline-none" id="exampleSearch" placeholder="Filter news" 
              onChange={(e)=>setSearchterm(e.target.value)}
              filterOption={(input,option)=> option.children.toLoweCase().indexOf(input.toLoweCase())>=0}> 
                  <option value="Crytocurrency">Filter Crytocurrency</option>
                  {Cryptolistdatum?.data?.coins.map((coin)=>(
                    <option value={coin.name}>{coin.name}</option>
                  ))}
              </select>
         </div>
      </div>
      </div>
      <div>
      </div>
      <h1 className='text-whiter1 mt-8 mx-4 font-medium'>Articles{}</h1>
      </>
   )}
   
    <div className='flex flex-row flex-wrap bg-none m-8 mb-12 gap-4 '>
    {Newslistdatum.value.map((news,i)=>(
        <div className={`flex  ${simplified?'w-[28rem]':'w-80'} bg-white rounded-lg flex-col  drop-shadow-2xl transition ease-in-out  duration-450`} key={i}>
          <div className='flex flex-row basis-2/6  rounded-t-lg'>
            <div className='basis-3/5 m-2 mb-1'><a href={news.url}><h1 className='text-blacker1 text-left text-sm font-semibold'>{news.name}</h1></a></div>
            <div className=''><img className=' bg-center basis-2/5 m-2 mb-1 ' style={{maxWidth:"100px",maxHeight:"100px"}}src={news?.image?.thumbnail?.contentUrl || demoimage} ></img></div>
          </div>
          <div className='flex flex-row basis-3/6 '>
            <div className='m-2 text-left'><p className='text-sm font-light text-darkgreyer'>{news.description > 20 ?`${news.description.substr(0,20)}...`:news.description}</p></div>
          </div>
          <div className='flex flex-row basis-1/6 justify-between mx-2 text-sm font-light text-blacker1 items-center '>
            <div className='items-center flex flex-row '><img className="h-8 w-8 rounded-full p-1" src={news.provider[0]?.image?.thumbnail?.contentUrl || demoprovidericon} alt="Provider-img"/><h1>{news.provider[0]?.name}</h1></div>
            <h1>{moment(news.datePublished).startOf('ss').fromNow()}</h1>
          </div>
        </div>
     ))}
      
    </div>
    {!simplified && ( <Footer/>)}
   
   </>
  )
}

export default News