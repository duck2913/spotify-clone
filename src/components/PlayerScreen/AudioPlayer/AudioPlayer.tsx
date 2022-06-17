import "./AudioPlayer.scss";
import CircleProgress from "./CircleProgress/CircleProgress";
import WaveAnimation from "./WaveAnimation/WaveAnimation";

const AudioPlayer = ({ currentTrack }) => {
	return (
		<div className="audio-player__container">
			<div className="audio-player__left">
				<CircleProgress
					percentage={75}
					isPlaying={true}
					color="#c96850"
					image={currentTrack?.album?.images[0].url}
					size={300}
				/>
			</div>
			<div className="audio-player__right">
				<h1 className="audio-player__title">{currentTrack.name}</h1>
				<p className="audio-player__artists">
					{currentTrack.artists.map((artist) => artist.name).join("-")}
				</p>
				<div className="song-duration">
					<div className="duration-start">0:00</div>
					<WaveAnimation isPlaying={true} />
					<div className="duration-end">3:15</div>
				</div>
				{/* controls */}
			</div>
		</div>
	);
};

export default AudioPlayer;
