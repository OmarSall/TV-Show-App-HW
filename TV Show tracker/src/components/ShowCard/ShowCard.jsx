import React from "react";
import styles from "./ShowCard.module.css";
import {Link} from "react-router-dom";

const ShowCard = ({show, children}) => {
    const imageUrl = show?.image?.medium || "/vite.svg";
    const premieredYear = show?.premiered ? show.premiered.split("-")[0] : "Unknown year";

    return (
        <div className={styles.card}>
            <img
                src={imageUrl}
                alt={show?.name || "TV Show"}
                className={styles.imageWrapper}
            />
            <div className={styles.info}>
                <h3>{show?.name || "Untitled"}</h3>
                <p>{premieredYear}</p>
                <Link to={`/shows/${show?.id}`} className={styles.detailsLink}>
                    View Details
                </Link>
                {children && <div className={styles.extra}>{children}</div>}
            </div>
        </div>
    );
};

export default ShowCard;