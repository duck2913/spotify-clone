import "./Queue.scss";
import React from "react";

interface Props {
	tracks: any[];
	setCurrentIdx: React.Dispatch<React.SetStateAction<number>>;
}

const Queue = React.memo(({ tracks, setCurrentIdx }: Props) => {
	const tracksData = tracks.slice(0, 20).map((track) => track.track);
	return (
		<div className="queue">
			<div className="queue__list">
				{tracksData.map((track: any, index: number) => (
					<li className="queue__item" key={index} onClick={() => setCurrentIdx(index)}>
						<span>
							{index + 1}. {track.name}
						</span>{" "}
						<span className="queue__item--duration">
							{Math.round(track.duration_ms / 1000 / 60)}:
							{Math.round((track.duration_ms / 1000) % 60)
								.toString()
								.padStart(2, "0")}
						</span>
					</li>
				))}
			</div>
		</div>
	);
});

export default Queue;
