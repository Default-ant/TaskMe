import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const API_URI = import.meta.env.VITE_APP_BASE_URL

// Updated baseQuery
const baseQuery = fetchBaseQuery({ 
  baseUrl: API_URI + "/api",
  
  // This is the part you need to add
  prepareHeaders: (headers, { getState }) => {
    // Get the token from your Redux state
    // Adjust 'auth.token' to match your auth slice
    const token = getState()?.auth?.user?.token 

    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    
    return headers
  },
})

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
})