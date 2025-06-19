import { Request, Response } from "express";
import Classroom from "../models/Classroom";

export const getAllClassrooms = async (req: Request, res: Response) => {
  try {
    const classrooms = await Classroom.find();
    res.json(classrooms);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getClassroomById = async (req: Request, res: Response) => {
  try {
    const classroom = await Classroom.findById(req.params.id);
    if (!classroom)
      return res.status(404).json({ error: "Classroom not found" });
    res.json(classroom);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const createClassroom = async (req: Request, res: Response) => {
  try {
    const newClassroom = new Classroom(req.body);
    const savedClassroom = await newClassroom.save();
    res.status(201).json(savedClassroom);
  } catch (err) {
    res.status(400).json({ error: "Invalid Data" });
  }
};

export const updateClassroom = async (req: Request, res: Response) => {
  try {
    const updatedClassroom = await Classroom.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedClassroom)
      return res.status(404).json({ error: "Classroom not found" });
    res.json(updatedClassroom);
  } catch (err) {
    res.status(400).json({ error: "Invalid Update Data" });
  }
};

export const deleteClassroom = async (req: Request, res: Response) => {
  try {
    const deletedClassroom = await Classroom.findByIdAndDelete(req.params.id);
    if (!deletedClassroom)
      return res.status(404).json({ error: "Classroom not found" });
    res.json({ message: "Classroom deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};
