import { Router } from "express";
import { uploadLecture } from "../controllers/lectureController";
const router = Router();
router.post("/upload", uploadLecture);
export default router;