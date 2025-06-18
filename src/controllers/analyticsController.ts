import { Request, Response } from "express";

export const getAnalytics = async (req: Request, res: Response) => {
  res.json({ message: "Class analytics coming soon" });
};
