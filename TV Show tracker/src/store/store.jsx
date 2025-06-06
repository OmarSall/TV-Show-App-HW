import {configureStore} from "@reduxjs/toolkit"
import api from "../api/tvmazeApi";
import showsReducer from "../store/showsSlice";

export const store = configureStore({
    reducer: {
        shows: showsReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(api.middleware);
    }
})