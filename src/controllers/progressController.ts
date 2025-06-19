import { Request, Response } from "express";
import Progress from "../models/Progress";

export const getAllProgress = async (req: Request, res: Response) => {
  try {
    const progress = await Progress.find();
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getProgressById = async (req: Request, res: Response) => {
  try {
    const progress = await Progress.findById(req.params.id);
    if (!progress) return res.status(404).json({ error: "Progress not found" });
    res.json(progress);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const createProgress = async (req: Request, res: Response) => {
  try {
    const newProgress = new Progress(req.body);
    const savedProgress = await newProgress.save();
    res.status(201).json(savedProgress);
  } catch (err) {
    res.status(400).json({ error: "Invalid Data" });
  }
};

export const updateProgress = async (req: Request, res: Response) => {
  try {
    const updated = await Progress.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: "Progress not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Invalid Update Data" });
  }
};

export const deleteProgress = async (req: Request, res: Response) => {
  try {
    const deleted = await Progress.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Progress not found" });
    res.json({ message: "Progress deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};
