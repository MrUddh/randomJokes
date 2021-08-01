import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jokesApi = createApi({
  reducerPath: 'jokesApi',
  baseQuery: fetchBaseQuery({ baseUrl: ' https://v2.jokeapi.dev/joke/' }),
  endpoints: (builder) => ({
    getJoke: builder.query({
      query: () => `any`,
    }),
    getFiveRandomJokesByCategory: builder.query({
      query: (category) => `${category}?type=single&amount=5`,
    }),
  }),
});

export const { useGetFiveRandomJokesByCategoryQuery } = jokesApi;
