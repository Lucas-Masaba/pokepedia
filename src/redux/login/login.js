import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const login = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/auth/login"
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (payload) => ({
        url: '',
        method: 'POST',
        payload,
      }),
    })
  })
})

export const { useLoginUserMutation } = login