import { useEffect, useState } from "react";
import apiClient from "../../api/spotify";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import "./LibraryScreen.scss";
import { useNavigate } from "react-router-dom";
const LibraryScreen = () => {
	const navigate = useNavigate();
	const [playlists, setPlaylists] = useState<any>();
	useEffect(() => {
		apiClient
			.get("me/playlists")
			.then((response) => response.data.items)
			.then((data) => setPlaylists(data));
	}, []);
	function playPlaylist(id: string) {
		navigate(`/player/`, { state: { id: id } });
	}
	return (
		<div className="library">
			{playlists?.map((playlist: any, index: number) => (
				<div className="playlist" key={index}>
					<img
						src={playlist.images[0].url}
						alt="playlist cover"
						className="playlist__img"
					/>
					<div className="playlist__info">
						<h3 className="playlist__title">{playlist.name}</h3>
						<p className="playlist__amount">{playlist.tracks.total} tracks</p>
						<button
							className="playlist__play"
							onClick={() => playPlaylist(playlist.id)}
						>
							<PlayCircleIcon />
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default LibraryScreen;
