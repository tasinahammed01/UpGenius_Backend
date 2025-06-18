import { Router } from "express";
import { addEvent } from "../controllers/calenderController";
const router = Router();
router.post("/add", addEvent);
export default router;