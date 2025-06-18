import { Request, Response } from "express";

export const getAIResponse = async (req: Request, res: Response) => {
  res.json({ message: "ai Assistence coming soon" });
};