import { Request, Response } from "express";
import Progress from "../models/Progress";

export const updateXP = async (req: Request, res: Response) => {
  const { userId, xp } = req.body;
  const updated = await Progress.findOneAndUpdate(
    { userId },
    { $inc: { xp } },
    { new: true, upsert: true }
  );
  res.json(updated);
};
