import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetShowDetailsQuery } from "../../api/tvmazeApi";
import {
    markEpisodeWatched,
    unmarkEpisodeWatched,
    saveEpisodesForShow,
} from "../../store/showsSlice";
import ShowDetails from "../../components/ShowDetails/ShowDetails";

const ShowDetailsPage = () => {
    const { id } = useParams();
    const showId = Number(id);
    const dispatch = useDispatch();

    const { data: showDetails, isLoading, isError } = useGetShowDetailsQuery(showId);
    const watchedEpisodes = useSelector((state) => state.shows.watchedEpisodes);


    useEffect(() => {
        if (showDetails?._embedded?.episodes) {
            dispatch(saveEpisodesForShow({
                showId,
                episodes: showDetails._embedded.episodes,
            }));
        }
    }, [showDetails, dispatch, showId]);

    const handleToggleEpisode = (episodeId) => {
        const watched = watchedEpisodes[showId] || [];
        if (watched.includes(episodeId)) {
            dispatch(unmarkEpisodeWatched({ showId, episodeId }));
        } else {
            dispatch(markEpisodeWatched({ showId, episodeId }));
        }
    };

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading show details.</p>;

    return (
        <ShowDetails
            show={showDetails}
            episodes={showDetails?._embedded?.episodes || []}
            watchedEpisodes={watchedEpisodes[showId] || []}
            onToggleEpisode={handleToggleEpisode}
        />
    );
};

export default ShowDetailsPage;
