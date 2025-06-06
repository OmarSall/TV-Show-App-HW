import { createSlice } from "@reduxjs/toolkit";
import {
    getShowsFromLocalStorage,
    saveShowsToLocalStorage,
} from "../localStorage/localStorage";

const initialState = getShowsFromLocalStorage() || {
    watchlist: [],
    watchedEpisodes: {},
    ratings: {},
    episodesByShow: {},
};

const showsSlice = createSlice({
    name: "shows",
    initialState,
    reducers: {
        addToWatchlist: (state, action) => {
            const show = action.payload;
            const exists = state.watchlist.find((s) => s.id === show.id);
            if (!exists) {
                state.watchlist.push(show);
                saveShowsToLocalStorage(state);
            }
        },

        removeFromWatchlist: (state, action) => {
            const showId = action.payload;
            state.watchlist = state.watchlist.filter((s) => s.id !== showId);
            delete state.watchedEpisodes[showId];
            delete state.ratings[showId];
            saveShowsToLocalStorage(state);
        },

        markEpisodeWatched: (state, action) => {
            const { showId, episodeId } = action.payload;
            if (!state.watchedEpisodes[showId]) {
                state.watchedEpisodes[showId] = [];
            }
            if (!state.watchedEpisodes[showId].includes(episodeId)) {
                state.watchedEpisodes[showId].push(episodeId);
                saveShowsToLocalStorage(state);
            }
        },

        unmarkEpisodeWatched: (state, action) => {
            const { showId, episodeId } = action.payload;
            if (state.watchedEpisodes[showId]) {
                state.watchedEpisodes[showId] = state.watchedEpisodes[showId].filter(
                    (id) => id !== episodeId
                );
                saveShowsToLocalStorage(state);
            }
        },

        rateShow: (state, action) => {
            const { showId, rating } = action.payload;
            if (rating >= 1 && rating <= 5) {
                state.ratings[showId] = rating;
                saveShowsToLocalStorage(state);
            }
        },
        saveEpisodesForShow: (state, action) => {
            const { showId, episodes } = action.payload;
            state.episodesByShow[showId] = episodes;
            saveShowsToLocalStorage(state);
        },
    },
});

export const {
    addToWatchlist,
    removeFromWatchlist,
    markEpisodeWatched,
    unmarkEpisodeWatched,
    rateShow,
    saveEpisodesForShow,
} = showsSlice.actions;

export default showsSlice.reducer;
