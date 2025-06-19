import { Request, Response } from "express";
import Assignment from "../models/Assignment";

export const getAllAssignments = async (req: Request, res: Response) => {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getAssignmentById = async (req: Request, res: Response) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) return res.status(404).json({ error: "Assignment not found" });
    res.json(assignment);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const createAssignment = async (req: Request, res: Response) => {
  try {
    const newAssignment = new Assignment(req.body);
    const savedAssignment = await newAssignment.save();
    res.status(201).json(savedAssignment);
  } catch (err) {
    res.status(400).json({ error: "Invalid Data" });
  }
};

export const updateAssignment = async (req: Request, res: Response) => {
  try {
    const updatedAssignment = await Assignment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAssignment) return res.status(404).json({ error: "Assignment not found" });
    res.json(updatedAssignment);
  } catch (err) {
    res.status(400).json({ error: "Invalid Update Data" });
  }
};

export const deleteAssignment = async (req: Request, res: Response) => {
  try {
    const deletedAssignment = await Assignment.findByIdAndDelete(req.params.id);
    if (!deletedAssignment) return res.status(404).json({ error: "Assignment not found" });
    res.json({ message: "Assignment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};