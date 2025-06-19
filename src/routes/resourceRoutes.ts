import { Router } from "express";
import { createResource } from "../controllers/resourseController";
const router = Router();
router.post("/upload", createResource);
export default router;