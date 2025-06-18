import { Request, Response } from "express";
import Assignment from "../models/Assignment";

export const createAssignment = async (req: Request, res: Response) => {
  const assignment = await Assignment.create(req.body);
  res.status(201).json(assignment);
};