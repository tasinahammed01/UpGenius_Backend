import { Router } from "express";
import { submitAssignment } from "../controllers/submissionController";
const router = Router();
router.post("/submit", submitAssignment);
export default router;