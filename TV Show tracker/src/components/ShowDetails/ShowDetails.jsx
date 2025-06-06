import React from "react";
import styles from "./ShowDetails.module.css";
import EpisodeList from "../EpisodeList/EpisodeList";

const ShowDetails = ({ show, episodes, watchedEpisodes, onToggleEpisode }) => {
    if (!show) {
        return <p>Loading show details...</p>;
    }

    const imageUrl = show.image?.original || show.image?.medium || "/vite.svg";

    const summaryText = show.summary
        ? show.summary.replace(/<\/?[^>]+(>|$)/g, "")
        : "No description available";

    return (
        <div className={styles.details}>
            <h2 className={styles.title}>{show.name}</h2>
            <div className={styles.topSection}>
                <img src={imageUrl} alt={show.name} className={styles.image} />
                <div className={styles.info}>
                    <p><strong>Premiered:</strong> {show.premiered || "Unknown"}</p>
                    <p><strong>Genres:</strong> {show.genres?.join(", ") || "N/A"}</p>
                    <p className={styles.summary}>{summaryText}</p>
                </div>
            </div>

            <h3>Episodes</h3>
            <EpisodeList
                episodes={episodes}
                watchedEpisodes={watchedEpisodes}
                onToggleEpisode={onToggleEpisode}
            />
        </div>
    );
};

export default ShowDetails;