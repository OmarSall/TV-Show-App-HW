export const API_BASE_URL = "https://api.tvmaze.com";

export const ENDPOINTS = {
    SEARCH_SHOWS: (query) => `${API_BASE_URL}/search/shows?q=${query}`,
    SHOW_DETAILS: (id) => `${API_BASE_URL}/shows/${id}`,
    ALL_SHOWS: `${API_BASE_URL}/shows`,
};