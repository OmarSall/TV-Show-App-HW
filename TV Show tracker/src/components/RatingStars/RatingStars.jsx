import React from "react";
import styles from "./RatingStars.module.css";
import { useDispatch, useSelector } from "react-redux";
import { rateShow } from "../../store/showsSlice";

const RatingStars = ({ showId }) => {
    const dispatch = useDispatch();
    const rating = useSelector((state) => state.shows.ratings[showId] || 0);

    const handleRate = (value) => {
        dispatch(rateShow({ showId, rating: value }));
    };

    return (
        <div className={styles.rating}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`${styles.star} ${rating >= star ? styles.active : ""}`}
                    onClick={() => handleRate(star)}
                >
          ★
        </span>
            ))}
        </div>
    );
};

export default RatingStars;