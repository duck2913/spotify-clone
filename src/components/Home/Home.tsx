import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";
import { LoginScreen } from "../../screens/auth/LoginScreen";
import FavoriteScreen from "../../screens/Favorites/FavoriteScreen";
import { FeedScreen } from "../../screens/Feed/FeedScreen";
import LibraryScreen from "../../screens/Library/LibraryScreen";
import PlayerScreen from "../../screens/Player/PlayerScreen";
import TrendingScreen from "../../screens/Trending/TrendingScreen";

const Home = () => {
	useEffect(() => {
		const _token = window.location.hash.split("&")[0];
		_token && localStorage.setItem("token", JSON.stringify(_token));
	}, []);

	return (
		<>
			{!localStorage.getItem("token") && <LoginScreen />}
			{localStorage.getItem("token") && (
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<App />}>
							<Route path="favorites" element={<FavoriteScreen />} />
							<Route path="feed" element={<FeedScreen />} />
							<Route path="trending" element={<TrendingScreen />} />
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
