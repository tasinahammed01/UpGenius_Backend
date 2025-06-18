import { Schema, model, Types } from "mongoose";

const assignmentSchema = new Schema({
  title: String,
  description: String,
  dueDate: Date,
  classroom: { type: Types.ObjectId, ref: "Classroom" },
});

export default model("Assignment", assignmentSchema);