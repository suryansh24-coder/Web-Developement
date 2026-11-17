# Experiment 12 — MERN Notes App
1. Install dependencies: `npm install`.
2. Copy `.env.example` to `.env`, set `MONGO_URI`, and start MongoDB.
3. For development, run `npm run dev` (React UI) and in a second terminal run `npm start` (Express API).
4. Open the Vite URL shown in the terminal.
5. For deployment: run `npm run build`, then `npm start`; Express serves the React build on the configured port.

Includes MongoDB persistence and Create, Read, Update and Delete operations. Configure environment variables on your cloud host; never commit `.env`.
