import { Outlet } from "react-router-dom";
import "./ScreenContainer.scss";

const ScreenContainer = () => {
	return (
		<div className="screen-container">
			<Outlet />
		</div>
	);
};

export default ScreenContainer;
