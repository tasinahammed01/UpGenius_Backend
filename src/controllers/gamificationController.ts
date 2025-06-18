import { Request, Response } from "express";

export const getBadges = async (req: Request, res: Response) => {
  res.json({ message: "Return badges earned by the user" });
};