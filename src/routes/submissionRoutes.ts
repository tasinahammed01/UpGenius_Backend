import { Router } from "express";
import { createSubmission } from "../controllers/submissionController";
const router = Router();
router.post("/submit", createSubmission);
export default router;
