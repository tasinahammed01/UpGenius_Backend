import Classroom from "../models/Classroom";
import { Request, Response } from "express";

export const createClassroom = async (req: Request, res: Response) => {
  const classroom = await Classroom.create(req.body);
  res.status(201).json(classroom);
};
