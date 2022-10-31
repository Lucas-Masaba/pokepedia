import { configureStore } from '@reduxjs/toolkit';
// Or from '@reduxjs/toolkit/query/react'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { pokemonApi } from './pokemon/pokemon';

import authReducer from './login/authSlice';
import { login } from './login/login'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    auth: authReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [login.reducerPath]: login.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: [thunk, logger],
});

export default store;
