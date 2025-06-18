import { Router } from "express";
import { updateXP } from "../controllers/progressController";
const router = Router();
router.post("/update", updateXP);
export default router;