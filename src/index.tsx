import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoriteScreen from "./screens/FavoriteScreen";
import { FeedScreen } from "./screens/FeedScreen";
import TrendingScreen from "./screens/TrendingScreen";
import LibraryScreen from "./screens/LibraryScreen";
import PlayerScreen from "./screens/PlayerScreen";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
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
	</BrowserRouter>,
);
