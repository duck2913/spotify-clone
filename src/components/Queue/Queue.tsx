import "./Queue.scss";

interface Props {
	tracks: any[];
	setCurrentIdx: React.Dispatch<React.SetStateAction<number>>;
}
const Queue = ({ tracks, setCurrentIdx }) => {
	const tracksData = tracks.slice(0, 13).map((track) => track.track);
	console.log("🚀 -> trackDatas", tracksData);
	return (
		<div className="queue">
			<div className="queue__list">
				{tracksData.map((track, index) => (
					<li className="queue__item" key={index} onClick={setCurrentIdx(index)}>
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
};

export default Queue;
