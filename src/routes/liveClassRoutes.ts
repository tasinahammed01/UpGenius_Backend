import { Router } from "express";
import { startLiveClass } from "../controllers/liveClassCountroller";
const router = Router();
router.post("/start", startLiveClass);
export default router;