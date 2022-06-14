import "./TrackInfo.scss";
import TrackInfoImage from "./TrackInfoImage/TrackInfoImage";

const TrackInfo = ({ album }) => {
	console.log(album);
	return (
		<div className="track-info">
			<TrackInfoImage url={album?.images[0]?.url} />
			<div className="track-info__description">
				<h3 className="track-info__heading">
					{album?.name} - {album?.artists?.map((artist: any) => artist.name).join(",")}
				</h3>
				<p className="track-info__text">
					{album?.name} is an album by {album?.artists[0]?.name} with{" "}
					{album?.total_tracks} tracks
				</p>
				<p className="track-info__release">Release: {album?.release_date}</p>
			</div>
		</div>
	);
};

export default TrackInfo;
