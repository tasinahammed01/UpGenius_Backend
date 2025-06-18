import { Router } from "express";
import { createAssignment } from "../controllers/assignmentController";
const router = Router();
router.post("/create", createAssignment);
export default router;