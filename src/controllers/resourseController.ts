import { Request, Response } from "express";
import Resource from "../models/Resource";

export const uploadResource = async (req: Request, res: Response) => {
  const resource = await Resource.create(req.body);
  res.status(201).json(resource);
};