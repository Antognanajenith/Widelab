
import {configureStore} from '@reduxjs/toolkit';
import { cryptoApi  } from '../Services/Cryptoapione';
import {Cryptonewsapi} from '../Services/Cryptonewsapi';

export default configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [Cryptonewsapi.reducerPath]:Cryptonewsapi.reducer,
    
    },
});