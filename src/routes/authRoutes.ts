import { Router } from "express";
import { registerUser } from "../controllers/authcontroller";
import { verifyFirebaseToken } from "../middleware/authMiddleware";

const router = Router();

router.post("/", verifyFirebaseToken, registerUser); // register/save user to DB
// router.get("/profile", verifyFirebaseToken, getUserProfile); // get profile (optional)

export default router;
