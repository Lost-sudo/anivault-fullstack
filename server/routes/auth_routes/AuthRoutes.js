import express from "express";
import AuthControllers from "../../controllers/auth_controllers/AuthControllers.js";

const router = express.Router();

router.post("/api/register", AuthControllers.register);
router.post("/api/login", AuthControllers.login);

export default router;

