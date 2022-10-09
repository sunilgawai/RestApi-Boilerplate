import express from "express";
import { homeController } from "../controllers";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const router = express.Router();

// Store Product Route.
router.post('/', homeController.home);

export default router;

