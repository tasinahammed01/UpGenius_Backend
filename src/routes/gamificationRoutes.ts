import { Router } from "express";
import { getBadges } from "../controllers/gamificationController";
const router = Router();
router.get("/badges", getBadges);
export default router;