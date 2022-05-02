import {createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiNewsHeaders  = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': 'dc94623c88mshd39ad94ced5b11ap1fa66djsn4690020098d2',
};

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiNewsHeaders });

export const Cryptonewsapi = createApi({
    reducerPath:'Cryptonewsapi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getNews:builder.query({
            query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
});

export const {useGetNewsQuery} = Cryptonewsapi;