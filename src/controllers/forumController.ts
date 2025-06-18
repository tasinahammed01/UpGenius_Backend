import { Request, Response } from "express";
import Discussion from "../models/Discussion";

export const postDiscussion = async (req: Request, res: Response) => {
  const post = await Discussion.create(req.body);
  res.status(201).json(post);
};
