import { Router } from "express";
import { getAIResponse } from "../controllers/aiAssistantController";
const router = Router();
router.post("/ask", getAIResponse);
export default router;