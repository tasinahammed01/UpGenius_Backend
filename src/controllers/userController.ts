import { Request, Response } from "express";

export const getUserProfile = async (req: Request, res: Response) => {
  res.json({ message: "User profile data" });
};
