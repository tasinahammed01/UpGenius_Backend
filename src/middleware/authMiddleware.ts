import { Request, Response, NextFunction } from "express";
import admin from "../utils/firebase"; // your firebase-admin setup

export const verifyFirebaseToken = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "No token provided" });
    return;
  }

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    (req as any).firebaseUser = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid Firebase token" });
  }
};
