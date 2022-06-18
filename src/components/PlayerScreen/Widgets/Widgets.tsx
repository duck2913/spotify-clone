import React, { useEffect, useState } from "react";
import apiClient from "../../../api/spotify";
import WidgetCard from "./WidgetCard/WidgetCard";
import "./Widgets.scss";

interface Props {
	artistId: string;
}

export const Widgets = React.memo(({ artistId }: Props) => {
	const [relatedArtists, setRelatedArtists] = useState<any>([]);
	const [featuredPlaylists, setFeaturedPlaylists] = useState<any>([]);
	const [newReleases, setNewReleases] = useState<any>([]);

	useEffect(() => {
		apiClient
			.get(`/artists/${artistId}/related-artists`)
			.then((res) => res.data)
			.then((data) => setRelatedArtists(data.artists.slice(0, 3)))
			.catch((error) => console.error(error));
	}, [artistId]);

	useEffect(() => {
		apiClient
			.get(`/browse/featured-playlists`)
			.then((res) => res.data)
			.then((data) => setFeaturedPlaylists(data.playlists.items.slice(0, 3)))
			.catch((error) => console.error(error));
	}, []);

	useEffect(() => {
		apiClient
			.get(`/browse/new-releases`)
			.then((res) => res.data)
			.then((data) => setNewReleases(data.albums.items.slice(0, 3)))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="widgets-container">
			<WidgetCard title={"Similar artists"} data={relatedArtists} />
			<WidgetCard title={"Featured playlists"} data={featuredPlaylists} />
			<WidgetCard title={"New releases"} data={newReleases} />
		</div>
	);
});
