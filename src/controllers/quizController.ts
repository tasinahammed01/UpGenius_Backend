import { Request, Response } from "express";
import Quiz from "../models/Quiz";

export const createQuiz = async (req: Request, res: Response) => {
  const quiz = await Quiz.create(req.body);
  res.status(201).json(quiz);
};
