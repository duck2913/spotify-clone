import "./WidgetCard.scss";

import React from "react";

interface Props {
	title: string;
	data: any;
}

const WidgetCard = ({ title, data }: Props) => {
	console.log("🚀 -> data", data);
	return (
		<div className="widget-card">
			<h3>{title}</h3>
			<div className="widget-card__content">
				{data[0]?.followers &&
					data?.map((artist: any) => (
						<div className="widget-element" key={artist?.id}>
							<img src={artist?.images[0]?.url} alt="artist" />
							<div className="widget-element__info">
								<h4 className="widget-element__name">{artist?.name}</h4>
								<div className="widget-element__sub">
									{artist?.followers?.total} followers
								</div>
							</div>
						</div>
					))}

				{data[0]?.description &&
					data.map((playlist: any) => (
						<div className="widget-element" key={playlist?.id}>
							<img src={playlist.images[0].url} alt="playlist" />
							<div className="widget-element__info">
								<h4 className="widget-element__name">{playlist.name}</h4>
								<div className="widget-element__sub">
									{playlist.tracks.total} tracks
								</div>
							</div>
						</div>
					))}

				{data[0]?.available_markets &&
					data.map((track: any) => (
						<div className="widget-element" key={track?.id}>
							<img src={track.images[0].url} alt="track" />
							<div className="widget-element__info">
								<h4 className="widget-element__name">{track.name}</h4>
								<div className="widget-element__sub">{track.artists[0].name}</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default WidgetCard;
