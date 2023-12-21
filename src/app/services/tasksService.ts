import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksApi = createApi({
    reducerPath: "tasksApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5001/api/tasks",
    }),
    tagTypes: ["Tasks"],
    endpoints: (build) => ({
        addTask: build.mutation({
            query: (body) => ({
                url: `/addtask`,
                body,
                method: "POST",
            }),
            invalidatesTags: ["Tasks"],
            transformResponse: (response: any) => response.data,
        }),
        getTasks: build.query({
            query: () => ({
                url: `/gettask`,
                method: "GET",
            }),
            providesTags: ["Tasks"],
            transformResponse: (response: any) => response.tasks,
        }),
        getTasksUser: build.query({
            query: (body) => ({
                url: `/gettaskuser?id=${body}`,
                method: "GET",
            }),
            providesTags: ["Tasks"],
            transformResponse: (response: any) => response.tasks,
        }),
        setTasks: build.mutation({
            query: (body) => ({
                url: `/setstatustask`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["Tasks"],
            transformResponse: (response: any) => response.tasks,
        }),
    }),
});
