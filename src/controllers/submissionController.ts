import { Request, Response } from "express";
import Submission from "../models/Submission";

export const getAllSubmissions = async (req: Request, res: Response) => {
  try {
    const submissions = await Submission.find();
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getSubmissionById = async (req: Request, res: Response) => {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission) return res.status(404).json({ error: "Submission not found" });
    res.json(submission);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const createSubmission = async (req: Request, res: Response) => {
  try {
    const newSubmission = new Submission(req.body);
    const savedSubmission = await newSubmission.save();
    res.status(201).json(savedSubmission);
  } catch (err) {
    res.status(400).json({ error: "Invalid Data" });
  }
};

export const updateSubmission = async (req: Request, res: Response) => {
  try {
    const updatedSubmission = await Submission.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSubmission) return res.status(404).json({ error: "Submission not found" });
    res.json(updatedSubmission);
  } catch (err) {
    res.status(400).json({ error: "Invalid Update Data" });
  }
};

export const deleteSubmission = async (req: Request, res: Response) => {
  try {
    const deletedSubmission = await Submission.findByIdAndDelete(req.params.id);
    if (!deletedSubmission) return res.status(404).json({ error: "Submission not found" });
    res.json({ message: "Submission deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};