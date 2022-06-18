import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../api/spotify";
import AudioPlayer from "../../components/PlayerScreen/AudioPlayer/AudioPlayer";
import Queue from "../../components/PlayerScreen/Queue/Queue";
import TrackInfo from "../../components/PlayerScreen/TrackInfo/TrackInfo";
import { Widgets } from "../../components/PlayerScreen/Widgets/Widgets";
import { SongPlayerContext } from "../../context/SongPlayerContext";
import "./PlayerScreen.scss";

interface CustomizedState {
	id: string;
}
const PlayerScreen = () => {
	const location = useLocation();

	const { currentIdx, setCurrentIdx, tracks, setTracks, currentTrack, setCurrentTrack } =
		useContext(SongPlayerContext);

	useEffect(() => {
		const state = location.state as CustomizedState;
		const id = state ? state.id : "37i9dQZF1DWURCUKHUKWCX";
		apiClient
			.get(`/playlists/${id}/tracks`)
			.then((response) => response.data)
			.then((data) => {
				setTracks(data.items);
				setCurrentTrack(data.items[0].track);
			})
			.catch((error) => console.error(error));
	}, [location.state]);

	useEffect(() => {
		setCurrentTrack(tracks[currentIdx]?.track);
	}, [currentIdx, tracks]);

	return (
		<div className="player">
			<div className="player__left">
				<AudioPlayer currentTrack={currentTrack} />
				{<Widgets artistId={currentTrack?.artists?.[0]?.id} />}
			</div>
			<div className="player__right">
				<TrackInfo album={currentTrack?.album} />
				<Queue tracks={tracks} setCurrentIdx={setCurrentIdx} currentIdx={currentIdx} />
			</div>
		</div>
	);
};

export default PlayerScreen;
