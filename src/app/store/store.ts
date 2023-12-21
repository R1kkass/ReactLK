import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/userService";
import { tasksApi } from "../services/tasksService";
import tokenReducer from "./TokenSlice";
import { statsApi } from "../services/statsService";

const rootReducer = combineReducers({
    [userApi.reducerPath]: userApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    [statsApi.reducerPath]: statsApi.reducer,
    tokenReducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(userApi.middleware)
                .concat(tasksApi.middleware)
                .concat(statsApi.middleware),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
