import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
const Sidebar = () => {
	return (
		<div className="sidebar">
			<NavLink to={"/favorites"}>Favorite</NavLink>
			<NavLink to={"/feed"}>Feed</NavLink>
		</div>
	);
};

export default Sidebar;
