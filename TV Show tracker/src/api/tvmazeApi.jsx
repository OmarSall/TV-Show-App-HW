import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_BASE_URL, ENDPOINTS} from "../constants/api";

const tvmazeApi = createApi({
    reducerPath: "tvmazeApi",
    baseQuery: fetchBaseQuery(
        {
            baseUrl: API_BASE_URL
        }),
    tagTypes: ["Show", "Episode", "Search"],
    endpoints: (builder) => ({
        searchShows: builder.query({
            query: (query) => ENDPOINTS.SEARCH_SHOWS(query),
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({show}) => ({type: "Show", id: show.id})),
                        {type: "Search", id: "LIST"},
                    ]
                    : [{type: "Search", id: "LIST"}],
        }),
        getShowDetails: builder.query({
            query: (id) => `${ENDPOINTS.SHOW_DETAILS(id)}?embed=episodes`,
            providesTags: (result, error, id) => [{type: "Show", id}],
        }),
        getShows: builder.query({
            query: () => ENDPOINTS.ALL_SHOWS,
            providesTags: [{type: "Show", id: "ALL"}],
        }),
    }),
});

export const {
    useSearchShowsQuery,
    useGetShowDetailsQuery,
    useGetShowsQuery,
} = tvmazeApi;

export default tvmazeApi;
