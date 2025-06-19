import { Router } from "express";
import { createProgress } from "../controllers/progressController";
const router = Router();
router.post("/update", createProgress);
export default router;
