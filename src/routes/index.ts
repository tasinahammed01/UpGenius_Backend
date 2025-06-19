import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Smart Classroom API 🚀",
    version: "1.0.0",
  });
});

export default router;
