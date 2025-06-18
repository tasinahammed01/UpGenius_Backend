import { Router } from "express";
import { postDiscussion } from "../controllers/forumController";
const router = Router();
router.post("/post", postDiscussion);
export default router;