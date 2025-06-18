import { Router } from "express";
import { getLeaderboard } from "../controllers/leaderBoardController";
const router = Router();
router.get("/", getLeaderboard);
export default router;
