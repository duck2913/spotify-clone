import { useContext, useEffect, useRef } from "react";
import { SongPlayerContext } from "../../../../context/SongPlayerContext";
import WaveAnimation from "../WaveAnimation/WaveAnimation";
import "./Controls.scss";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

interface Props {
	songSrc: any;
	setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
	isPlaying: boolean;
}

const Controls = ({ songSrc }: Props) => {
	const songRef = useRef(null);
	const {
		setPercentage,
		currentTime,
		setCurrentTime,
		currentIdx,
		setCurrentIdx,
		setIsPlaying,
		isPlaying,
		tracks,
	} = useContext(SongPlayerContext);

	function handleNextSong() {
		if (currentIdx === tracks.length - 1) {
			setCurrentIdx(0);
		} else {
			setCurrentIdx((currIdx) => currIdx + 1);
		}
	}

	function handlePrevSong() {
		if (currentIdx === 0) {
			setCurrentIdx(tracks.length - 1);
		} else {
			setCurrentIdx((currIdx) => currIdx - 1);
		}
	}

	function handlePlayPause() {
		if (songRef.current.paused) {
			songRef.current.play();
			setIsPlaying(true);
		} else {
			songRef.current.pause();
			setIsPlaying(false);
		}
	}

	useEffect(() => {
		setIsPlaying(true);
		const timer = setInterval(() => {
			if (songRef.current.ended) {
				setCurrentTime(0);
				setPercentage(0);
				setIsPlaying(false);
				clearInterval(timer);
				handleNextSong();
			} else {
				setPercentage(
					Math.round((songRef.current.currentTime / songRef.current.duration) * 100),
				);
				setCurrentTime(songRef.current.currentTime);
			}
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, [songSrc]);

	return (
		<div className="controls">
			<audio src={songSrc} ref={songRef} autoPlay></audio>
			<div className="song-duration">
				<div className="duration-start">
					0:
					{currentTime
						? Math.round(currentTime % 60)
								.toString()
								.padStart(2, "0")
						: "00"}
				</div>
				<WaveAnimation isPlaying={isPlaying} />
				<div className="duration-end">0:30</div>
			</div>
			<div className="controls__buttons">
				<button onClick={handlePrevSong}>
					<SkipPreviousIcon className="controls__button" />
				</button>
				<button onClick={handlePlayPause}>
					{!isPlaying && <PlayArrowIcon className="controls__button" />}
					{isPlaying && <PauseCircleIcon className="controls__button" />}
				</button>
				<button onClick={handleNextSong}>
					<SkipNextIcon className="controls__button" />
				</button>
			</div>
		</div>
	);
};

export default Controls;
