// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonByType: builder.query({
      query: (type) => `type/${type}`,
    }),
    getAllTypes: builder.query({
      query: () => 'type',
    }),
    getPokemonDescription: builder.query({
      query: (name) => `pokemon-species/${name}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPokemonByNameQuery,
  useGetPokemonByTypeQuery,
  useGetAllTypesQuery,
  useGetPokemonDescriptionQuery,
} = pokemonApi;
