import express from 'express';
import AnimeController from "../../controllers/anime_api_controllers/anime_api.js";

const router = express.Router();
const animeController = new AnimeController();

router.get("/api/anime", (req, res) => animeController.getAnime(req, res));
router.get("/api/top/anime", (req, res) => animeController.getTopAnime(req, res));
router.get("/api/recommended/anime", (req, res) => animeController.getRecommendedAnime(req, res));
router.get("/api/random/anime", (req, res) => animeController.getRandomAnime(req, res));
router.get("/api/anime/:id/reviews", (req, res) => animeController.getAnimeReviews(req, res));
router.get("/api/anime/:id/relations", (req, res) => animeController.getAnimeRelations(req, res));

export default router;