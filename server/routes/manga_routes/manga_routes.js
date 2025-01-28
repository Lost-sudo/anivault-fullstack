import express from "express";
import MangaController from "../../controllers/manga_api_controllers/manga_api.js";

const router = express.Router();
const mangaController = new MangaController();

router.get("/api/manga", (req, res) => mangaController.getManga(req, res));
router.get("/api/top/manga", (req, res) => mangaController.geTopManga(req, res));
router.get("/api/recommended/manga", (req, res) => mangaController.getRecommendedManga(req, res));
router.get("/api/random/manga", (req, res) => mangaController.getRandomManga(req, res));

//Reviews
router.get("/api/:id/manga-reviews", (req, res) => mangaController.getMangaReviews(req, res));
//Relations
router.get("/api/:id/manga-relations", (req, res) => mangaController.getMangaRelations(req, res));

export default router;