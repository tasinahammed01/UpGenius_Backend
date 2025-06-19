import User from "../models/User";
import { Request, Response } from "express";

export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email, role = "student" } = req.body;
  const firebaseUser = (req as any).firebaseUser;

  try {
    // Check if user already exists
    const existing = await User.findOne({ email });
    if (existing) {
      res.status(200).json(existing);
      return;
    }

    // Save new user
    const newUser = new User({
      name,
      email,
      role,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err });
  }
};
