import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5001/api/user",
    }),
    tagTypes: ["User"],
    endpoints: (build) => ({
        registration: build.mutation({
            query: (body) => ({
                url: `/registration`,
                body,
                method: "POST",
            }),
            invalidatesTags: ["User"],
            transformResponse: (response: any) => response.data,
        }),
        auth: build.mutation({
            query: (body) => ({
                url: `/auth`,
                body,
                method: "POST",
            }),
            invalidatesTags: ["User"],
            transformResponse: (response: any) => response.access_token,
        }),
        getAllUsers: build.query({
            query: ()=>({
                url: `/getall`,
                method: "GET",
            }),
            providesTags: ["User"],

        })
    }),
});
