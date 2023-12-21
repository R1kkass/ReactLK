import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const statsApi = createApi({
    reducerPath: "stasAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5001/api/stats",
    }),
    tagTypes: ["Stats"],
    endpoints: (build) => ({
        getTasks: build.query({
            query: ()=>({
                url: `/tasks`,
                method: "GET",
            }),
            providesTags: ["Stats"],

        })
    }),
});
