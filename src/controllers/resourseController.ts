import { Request, Response } from "express";
import Resource from "../models/Resource";

export const getAllResources = async (req: Request, res: Response) => {
  try {
    const Resources = await Resource.find();
    res.json(Resources);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getResourceById = async (req: Request, res: Response) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ error: "Resource not found" });
    res.json(resource);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const createResource = async (req: Request, res: Response) => {
  try {
    const newResource = new Resource(req.body);
    const savedResource = await newResource.save();
    res.status(201).json(savedResource);
  } catch (err) {
    res.status(400).json({ error: "Invalid Data" });
  }
};

export const updateResource = async (req: Request, res: Response) => {
  try {
    const updatedResource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedResource) return res.status(404).json({ error: "Resource not found" });
    res.json(updatedResource);
  } catch (err) {
    res.status(400).json({ error: "Invalid Update Data" });
  }
};

export const deleteResource = async (req: Request, res: Response) => {
  try {
    const deletedResource = await Resource.findByIdAndDelete(req.params.id);
    if (!deletedResource) return res.status(404).json({ error: "Resource not found" });
    res.json({ message: "Resource deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};