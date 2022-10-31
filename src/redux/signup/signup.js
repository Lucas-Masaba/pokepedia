import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const signUp = createApi({
  reducerPath: "signup",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/users"
  }),
  endpoints: (builder) => ({
    signUpUser: builder.mutation({
      query: (payload) => ({
        url: '',
        method: 'POST',
        body: payload,
      }),
    })
  })
})

export const { useSignUpUserMutation } = signUp