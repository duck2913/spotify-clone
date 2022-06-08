import { useEffect } from "react";
import ScreenContainer from "./components/ScreenContainer/ScreenContainer";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
	return (
		<div className="App">
			<Sidebar />
			<ScreenContainer />
		</div>
	);
}

export default App;
