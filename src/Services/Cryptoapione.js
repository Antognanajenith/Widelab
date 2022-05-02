import {createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders  = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'dc94623c88mshd39ad94ced5b11ap1fa66djsn4690020098d2'
};

const baseUrl = "https://coinranking1.p.rapidapi.com";


const createRequest =  (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
        reducerPath: 'cryptoApi',
        baseQuery: fetchBaseQuery({baseUrl}),
        endpoints:(builder)=>({
            getCryptos:builder.query({
                query:(displaycount)=>createRequest(`/coins?limit=${displaycount}`),
            }),
            getCryptoDetails:builder.query({
                query:(coinId)=>createRequest(`/coin/${coinId}`),
            }),
        }),
});

export const {useGetCryptosQuery,useGetCryptoDetailsQuery} = cryptoApi ;
              
