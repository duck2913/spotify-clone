import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalFireDepartment from "@mui/icons-material/LocalFireDepartment";
import LogoutIcon from "@mui/icons-material/Logout";
import { useEffect, useState } from "react";
import apiClient from "../../api/spotify";

const Sidebar = () => {
	const [avatarUrl, setAvatarUrl] = useState<string>(
		"https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=456&q=80",
	);

	useEffect(() => {
		apiClient.get("me").then((response) => {
			setAvatarUrl(response.data.images[0].url);
		});
	}, []);

	function logoutHandler() {
		localStorage.clear();
		window.location.reload();
	}

	return (
		<div className="sidebar">
			<img className="sidebar__avatar" src={avatarUrl} alt="avatar images" />
			<div className="sidebar__nav-links">
				<NavLink
					to={"/feed"}
					className={({ isActive }) =>
						isActive ? "sidebar__link active" : "sidebar__link"
					}
				>
					<DashboardIcon />
					Feed
				</NavLink>
				<NavLink
					to={"/favorites"}
					className={({ isActive }) =>
						isActive ? "sidebar__link active" : "sidebar__link"
					}
				>
					<FavoriteIcon />
					Favorites
				</NavLink>
				<NavLink
					to={"/player"}
					className={({ isActive }) =>
						isActive ? "sidebar__link active" : "sidebar__link"
					}
				>
					<PlayArrowIcon />
					Player
				</NavLink>
				<NavLink
					to={"/trending"}
					className={({ isActive }) =>
						isActive ? "sidebar__link active" : "sidebar__link"
					}
				>
					<LocalFireDepartment />
					Trending
				</NavLink>
				<NavLink
					to={"/library"}
					className={({ isActive }) =>
						isActive ? "sidebar__link active" : "sidebar__link"
					}
				>
					<AccountBalanceIcon />
					Library
				</NavLink>
			</div>
			<button className="sidebar__logout" onClick={logoutHandler}>
				<LogoutIcon />
				Log out
			</button>
		</div>
	);
};

export default Sidebar;
