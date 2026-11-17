# Experiment 9 — User Authentication
1. Run `npm install`.
2. Copy `.env.example` to `.env` and set `MONGO_URI` and a strong `JWT_SECRET`.
3. Start MongoDB, then run `npm start`.

Endpoints: `POST /register` with `{ "email":"a@b.com","password":"secret" }`; `POST /login` returns a JWT; `GET /profile` requires header `Authorization: Bearer TOKEN`.

Lab demonstration only: production authentication also needs validation, rate limiting, HTTPS, secure token storage, account recovery and stronger error handling. Do not commit `.env`.
