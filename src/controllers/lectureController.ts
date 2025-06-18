import { Request, Response } from "express";
import Lecture from "../models/Lecture";

export const uploadLecture = async (req: Request, res: Response) => {
  const lecture = await Lecture.create(req.body);
  res.status(201).json(lecture);
};
