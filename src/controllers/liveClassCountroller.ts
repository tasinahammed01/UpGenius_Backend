import { Request, Response } from "express";

export const startLiveClass = async (req: Request, res: Response) => {
  res.json({ message: "Live class started (placeholder)" });
};