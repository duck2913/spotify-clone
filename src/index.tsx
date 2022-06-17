import ReactDOM from "react-dom/client";
import "./index.scss";
import Home from "./components/Home/Home";
import SongPlayerContextProvider from "./context/SongPlayerContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<SongPlayerContextProvider>
		<Home />
	</SongPlayerContextProvider>,
);
