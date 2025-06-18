import { Request, Response } from "express";
import User from "../models/User";

export const register = async (req: Request, res: Response) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const login = async (req: Request, res: Response) => {
  // Dummy logic
  res.status(200).json({ message: "Login successful" });
};