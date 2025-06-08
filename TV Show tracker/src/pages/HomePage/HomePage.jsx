import { useState } from "react";
import { useSearchShowsQuery, useGetShowsQuery } from "../../api/tvmazeApi";
import ShowCard from "../../components/ShowCard/ShowCard";
import styles from "./HomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, removeFromWatchlist } from "../../store/showsSlice";

const HomePage = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const watchlist = useSelector((state) => state.shows.watchlist);

    const isInWatchlist = (showId) => {
        return watchlist.some((s) => s.id === showId);
    };

    const handleToggleWatchlist = (show) => {
        if (isInWatchlist(show.id)) {
            dispatch(removeFromWatchlist(show.id));
        } else {
            dispatch(addToWatchlist(show));
        }
    };

    const {
        data: searchResults,
        isLoading: isSearchLoading,
    } = useSearchShowsQuery(query, { skip: !query });

    const {
        data: shows,
        isLoading: isShowsLoading
    } = useGetShowsQuery(undefined, { skip: !!query });

    const results = query
        ? searchResults?.map((res) => res.show)
        : shows?.slice(0, 50);

    return (
        <div className={styles.container}>
            <h1>TV Show Tracker</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for shows..."
                className={styles.searchInput}
            />

            {(isSearchLoading || isShowsLoading) && <p>Loading...</p>}

            <div className={styles.list}>
                {results?.map((show) => (
                    <ShowCard key={show.id} show={show} >
                        <button
                            onClick={() => handleToggleWatchlist(show)}
                            className={styles.watchlistBtn}
                        >
                            {isInWatchlist(show.id) ? "Remove from Watchlist" : "Add to Watchlist"}
                        </button>
                    </ShowCard>
                ))}
            </div>
        </div>
    );
};

export default HomePage;