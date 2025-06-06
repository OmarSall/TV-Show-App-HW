import React from "react";
import styles from "./EpisodeList.module.css";

const EpisodeList = ({ episodes, watchedEpisodes = [], onToggleEpisode }) => {
    if (!episodes || episodes.length === 0) {
        return <p>No episodes available.</p>;
    }

    return (
        <ul className={styles.list}>
            {episodes.map((episode) => {
                const isWatched = watchedEpisodes.includes(episode.id);

                return (
                    <li key={episode.id} className={styles.episode}>
                        <label>
                            <input
                                type="checkbox"
                                checked={isWatched}
                                onChange={() => onToggleEpisode(episode.id)}
                            />
                            <span className={isWatched ? styles.watched : ""}>
                S{episode.season}E{episode.number} - {episode.name}
              </span>
                        </label>
                    </li>
                );
            })}
        </ul>
    );
};

export default EpisodeList;