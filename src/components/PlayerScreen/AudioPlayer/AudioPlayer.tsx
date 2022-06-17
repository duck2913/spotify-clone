import { useContext } from "react";
import "./AudioPlayer.scss";
import CircleProgress from "./CircleProgress/CircleProgress";
import Controls from "./Controls/Controls";
import { SongPlayerContext } from "../../../context/SongPlayerContext";

interface Props {
	currentTrack: any;
}

const AudioPlayer = ({ currentTrack }: Props) => {
	const { isPlaying, setIsPlaying, percentage } = useContext(SongPlayerContext);

	return (
		<div className="audio-player__container">
			<div className="audio-player__left">
				<CircleProgress
					percentage={percentage}
					isPlaying={isPlaying}
					color="#c96850"
					image={currentTrack?.album?.images[0].url}
					size={300}
				/>
			</div>
			<div className="audio-player__right">
				<h1 className="audio-player__title">{currentTrack?.name}</h1>
				<p className="audio-player__artists">
					{currentTrack?.artists?.map((artist: any) => artist.name).join("-")}
				</p>
				<Controls
					songSrc={currentTrack?.preview_url}
					setIsPlaying={setIsPlaying}
					isPlaying={isPlaying}
				/>
			</div>
		</div>
	);
};

export default AudioPlayer;
