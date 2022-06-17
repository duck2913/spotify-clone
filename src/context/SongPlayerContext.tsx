import { createContext, useState } from "react";

interface Props {
	isPlaying: boolean;
	percentage: number;
	currentTime: number;
	currentIdx: number;
	tracks: any[];
	currentTrack: any;
	setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
	setPercentage: React.Dispatch<React.SetStateAction<number>>;
	setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
	setCurrentIdx: React.Dispatch<React.SetStateAction<number>>;
	setTracks: React.Dispatch<React.SetStateAction<any[]>>;
	setCurrentTrack: React.Dispatch<any>;
}

export const SongPlayerContext = createContext<Props>({
	currentIdx: 0,
	isPlaying: false,
	currentTime: 0,
	percentage: 0,
	tracks: [],
	currentTrack: {},
	setIsPlaying: () => {},
	setPercentage: () => {},
	setCurrentTime: () => {},
	setCurrentIdx: () => {},
	setTracks: () => {},
	setCurrentTrack: () => {},
});

export default function SongPlayerContextProvider({ children }) {
	const [tracks, setTracks] = useState<any[]>([]);
	const [currentTrack, setCurrentTrack] = useState<any>({});
	const [currentTime, setCurrentTime] = useState(0);
	const [isPlaying, setIsPlaying] = useState(true);
	const [percentage, setPercentage] = useState(0);
	const [currentIdx, setCurrentIdx] = useState(0);

	const ctx = {
		tracks,
		setTracks,
		currentTrack,
		setCurrentTrack,
		isPlaying,
		percentage,
		setIsPlaying,
		currentIdx,
		setCurrentIdx,
		setPercentage,
		currentTime,
		setCurrentTime,
	};
	return <SongPlayerContext.Provider value={ctx}>{children}</SongPlayerContext.Provider>;
}
