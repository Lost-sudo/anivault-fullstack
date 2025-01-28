import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import AnimeRoutes from "./routes/anime_routes/anime_routes.js";
import MangaRoutes from "./routes/manga_routes/manga_routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", AnimeRoutes);
app.use("/", MangaRoutes);

export default app;