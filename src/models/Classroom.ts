import { Schema, model, Types } from "mongoose";

const classroomSchema = new Schema({
  title: String,
  description: String,
  teacher: { type: Types.ObjectId, ref: "User" },
  students: [{ type: Types.ObjectId, ref: "User" }],
});

export default model("Classroom", classroomSchema);