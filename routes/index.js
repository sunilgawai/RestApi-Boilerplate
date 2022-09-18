import express from "express";
import { homeController } from "../controllers";
const router = express.Router();

// Store Product Route.
router.post('/', homeController.home);

export default router;