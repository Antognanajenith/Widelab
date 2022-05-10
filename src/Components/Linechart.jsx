import React from 'react';
import {Line} from "react-chartjs-2";
import { Chart, registerables} from 'chart.js';

const Linechart = ({coinHistory,currentPrice,coinName}) => {

  const coinPrice = [];
  const coinTimestamp = [];

  for (let i=0;i<coinHistory?.data?.history?.length;i+=1){
    coinPrice.push(coinHistory?.data?.history[i].price);
    }

  for (let i=0;i<coinHistory?.data?.history?.length;i+=1){
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp*1000).toLocaleDateString("en-US"));
    } 

    console.log(coinPrice);
    console.log(coinTimestamp);
  const data = {
    labels:coinTimestamp,
      datasets:[
          {
              label:'Price in USD',
              data:coinPrice,
              fill:false,
              backgroundColor:"#3C12BE",
              borderColor: '#0071bd',
          },
      ],
    };

   const options = {
    responsive: true,
       scales:{
        yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        xAxes:[
            {
                time: {
                    unit: 'day'
                  }
            }
        ],  
       }
   };
   Chart.register(...registerables);

  return (
    <div className='w-full h-full flex items-center'>
      <Line data={data} options={options}/> 
    </div>
  )
}

export default Linechart;