import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import AnimeRoutes from "./routes/anime_routes/anime_routes.js";
import MangaRoutes from "./routes/manga_routes/manga_routes.js";
import authRoutes from "./routes/auth_routes/AuthRoutes.js";

import passport from "./config/passport.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use("/", AnimeRoutes);
app.use("/", MangaRoutes);

app.use("/", authRoutes)

export default app;