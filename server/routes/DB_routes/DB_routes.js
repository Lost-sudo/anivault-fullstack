import express from "express";
import AddDataController from "../../controllers/DB_Controllers/AddDataController.js";
import authMiddleware from "../../middlewares/authMiddleware.js";
import DeleteDataController from "../../controllers/DB_Controllers/DeleteDataController.js";

const router = express.Router();

router.post("/api/insert-anime", authMiddleware, AddDataController.addAnime);
router.post("/api/insert-manga", authMiddleware, AddDataController.addManga);
router.delete("/api/delete-anime", authMiddleware, DeleteDataController.deleteAnime);
router.delete("/api/delete-manga", authMiddleware, DeleteDataController.deleteManga);

export default router;
