import { Request, Response } from "express";
import Submission from "../models/Submission";

export const submitAssignment = async (req: Request, res: Response) => {
  const submission = await Submission.create(req.body);
  res.status(201).json(submission);
};