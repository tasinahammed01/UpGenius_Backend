import { Router } from "express";
import { uploadResource } from "../controllers/resourseController";
const router = Router();
router.post("/upload", uploadResource);
export default router;