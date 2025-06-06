const LOCAL_STORAGE_KEY = "tvShowsData";

export function saveShowsToLocalStorage(data) {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error("Error saving shows to localStorage:", error);
    }
}

export function getShowsFromLocalStorage() {
    try {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
        return saved ? JSON.parse(saved) : {
            watchlist: [],
            watchedEpisodes: {},
            ratings: {}
        };
    } catch (error) {
        console.error("Error reading shows from localStorage:", error);
        return {
            watchlist: [],
            watchedEpisodes: {},
            ratings: {}
        };
    }
}