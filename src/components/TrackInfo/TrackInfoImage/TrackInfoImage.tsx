import "./TrackInfoImage.scss";

interface Props {
	url: string;
}

const TrackInfoImage = ({ url }: Props) => {
	return (
		<div className="track-info__img-container">
			<img src={url} alt="album img" className="track-info__img" />
			<img src={url} alt="album img" className="track-info__shadow" />
		</div>
	);
};

export default TrackInfoImage;
