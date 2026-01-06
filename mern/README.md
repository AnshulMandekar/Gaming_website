# Gaming Hub on the MERN stack
MongoDB stores games and scores.
Express serves the JSON API under /api.
React (Vite) in gamess/ renders the hub.
Node runs the server from mern/server.
Start the API with npm run dev in mern/server.
Set MONGO_URI in mern/server/.env.
Set VITE_API_URL in the client to point at the API.
The API exposes /api/games and /api/scores.
