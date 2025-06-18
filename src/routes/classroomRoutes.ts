import { Router } from "express";
import { createClassroom } from "../controllers/classroomController";
const router = Router();
router.post("/create", createClassroom);
export default router;