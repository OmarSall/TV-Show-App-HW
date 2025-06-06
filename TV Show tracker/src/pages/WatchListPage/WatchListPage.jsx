import React from "react";
import {useSelector, useDispatch} from "react-redux";
import ShowCard from "../../components/ShowCard/ShowCard.jsx";
import RatingStars from "../../components/RatingStars/RatingStars.jsx";
import EpisodeList from "../../components/EpisodeList/EpisodeList.jsx";
import styles from "./WatchListPage.module.css";
import {
    removeFromWatchlist,
    markEpisodeWatched,
    unmarkEpisodeWatched,
} from "../../store/showsSlice.jsx";

const WatchListPage = () => {
    const dispatch = useDispatch();
    const watchlist = useSelector((state) => state.shows.watchlist);
    const watchedEpisodes = useSelector((state) => state.shows.watchedEpisodes);
    const episodesByShow = useSelector((state) => state.shows.episodesByShow || {});


    if (watchlist.length === 0) {
        return <p className={styles.empty}>Your watchlist is empty.</p>;
    }

    const handleRemove = (showId) => {
        dispatch(removeFromWatchlist(showId));
    };

    const handleToggleEpisode = (showId, episodeId) => {
        const watched = watchedEpisodes[showId] || [];
        if (watched.includes(episodeId)) {
            dispatch(unmarkEpisodeWatched({ showId, episodeId }));
        } else {
            dispatch(markEpisodeWatched({ showId, episodeId }));
        }
    };

    return (
        <div className={styles.container}>
            <h1>My Watchlist</h1>
            <div className={styles.list}>
                {watchlist.map((show) => (
                    <ShowCard key={show.id} show={show}>
                        <div className={styles.controls}>
                            <button
                                className={styles.removeBtn}
                                onClick={() => handleRemove(show.id)}
                            >
                                Remove from Watchlist
                            </button>

                            <RatingStars showId={show.id}/>

                            <EpisodeList
                                episodes={episodesByShow[show.id] || []}
                                watchedEpisodes={watchedEpisodes[show.id] || []}
                                onToggleEpisode={(episodeId) => handleToggleEpisode(show.id, episodeId)}
                            />
                        </div>
                    </ShowCard>
                ))}
            </div>
        </div>
    );
};

export default WatchListPage;
