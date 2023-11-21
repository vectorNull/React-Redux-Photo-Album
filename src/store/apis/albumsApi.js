import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';
import { nanoid } from '@reduxjs/toolkit';

const albumsApi = createApi({
  //* Required properties
  reducerPath: 'albums',
  //* Returns a pre-configured version of 'fetch'
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  endpoints: (builder) => {
    return {
      fetchAlbums: builder.query({
        //* args for providesTags include whatever was passed to the hook.
        //* So the user will be there as well. Might be named 'arg' but in this case, its just the user
        providesTags: (result, error, user) => {
          return [{ type: 'album', id: user.id }]
        },
        query: (user) => {
          return {
            url: '/albums',
            params: {
              userId: user.id
            },
            method: 'GET'
          }
        }
      }),
      createAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: 'album', id: user.id}]
        },
        query: (user) => {
          return {
            url: '/albums',
            method: 'POST',
            body: {
              title: faker.commerce.productName(),
              userId: user.id
            }
          }
        }
      })
    }
  }

});

export const { useFetchAlbumsQuery, useCreateAlbumMutation } = albumsApi;
export { albumsApi };