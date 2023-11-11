import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.staging.sumize.io/api",
  }),
  prepareHeaders: async (headers) => {
    headers.set("Content-Type", "application/json");
    headers.set("accept", "text/plain");
    return headers;
  },
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
      transformResponse: (response) => response?.data, // Customizing query responses
      transformErrorResponse: (response) => response?.data,
    }),
    postTodos: builder.mutation({
      query: (body) => ({
        url: "/todos",
        method: "POST",
        body,
      }),
      transformResponse: (response) => response?.data, // Customizing query responses
      transformErrorResponse: (response) => response?.data,
    }),
    updateTodos: builder.mutation({
      query: ({ id, data }) => ({
        url: `/todos/${id}`,
        method: "PUT",
        body: data,
      }),
      transformResponse: (response) => response?.data, // Customizing query responses
      transformErrorResponse: (response) => response?.data,
    }),
    deleteTodos: builder.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response) => response?.data, // Customizing query responses
      transformErrorResponse: (response) => response?.data,
    }),
  }),
});

export const {
  useGetTodosQuery,
  usePostTodosMutation,
  useDeleteTodosMutation,
  useUpdateTodosMutation,
} = api;
