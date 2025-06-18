import { Request, Response } from "express";
import Notification from "../models/Notification";

export const sendNotification = async (req: Request, res: Response) => {
  const notif = await Notification.create(req.body);
  res.status(201).json(notif);
};