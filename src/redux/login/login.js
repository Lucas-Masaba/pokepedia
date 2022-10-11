import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const login = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/auth/login"
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({email, password}) => ({
        url: '',
        method: 'POST',
        body: post,
      }),
    })
  })
})

export const { useLoginUserMutation } = login