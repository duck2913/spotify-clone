import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import { LoginScreen } from "../../screens/auth/LoginScreen";
import FavoriteScreen from "../../screens/Favorites/FavoriteScreen";
import { FeedScreen } from "../../screens/Feed/FeedScreen";
import LibraryScreen from "../../screens/Library/LibraryScreen";
import PlayerScreen from "../../screens/Player/PlayerScreen";
import TrendingScreen from "../../screens/Trending/TrendingScreen";
import { setClientToken } from "../../api/spotify";

const Home = () => {
	const [token, setToken] = useState<any>("");

	useEffect(() => {
		const localToken = localStorage.getItem("token");
		const hash_token = window.location.hash.split("&")[0].split("=")[1];
		window.location.hash = "";
		if (!localToken && hash_token) {
			localStorage.setItem("token", hash_token);
			setToken(hash_token);
			setClientToken(localStorage.getItem("token"));
		} else {
			setToken(localToken);
			setClientToken(localToken);
		}
	}, []);

	return (
		<>
			{!token && <LoginScreen />}
			{token && (
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<App />}>
							<Route path="player" element={<PlayerScreen />} />
							<Route path="library" element={<LibraryScreen />} />
							<Route
								path="*"
								element={
									<main style={{ padding: "1rem" }}>
										<p>There's nothing here!</p>
									</main>
								}
							/>
						</Route>
					</Routes>
				</BrowserRouter>
			)}
		</>
	);
};

export default Home;
