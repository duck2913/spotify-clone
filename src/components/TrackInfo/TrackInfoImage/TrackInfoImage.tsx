import "./TrackInfoImage.scss";

interface Props {
	url: string;
}

const TrackInfoImage = ({ url }: Props) => {
	return (
		<div className="track-info__img-container">
			<img src={url} alt="album img" className="track-info__img" />
			<div className="track-info__shadow">
				<img src={url} alt="album img" />
			</div>
		</div>
	);
};

export default TrackInfoImage;
