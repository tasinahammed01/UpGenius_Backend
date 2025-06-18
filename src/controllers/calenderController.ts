import { Request, Response } from "express";
import CalendarEvent from "../models/CalenderEvent";

export const addEvent = async (req: Request, res: Response) => {
  const event = await CalendarEvent.create(req.body);
  res.status(201).json(event);
};
