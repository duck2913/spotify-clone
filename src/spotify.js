const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "467bebbf2b0644188281976f8859fa4d";
const redirectUrl = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scopes.join(
	"%20",
)}&response_type=token&show_dialog=true`;
