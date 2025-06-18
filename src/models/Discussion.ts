import { Schema, model, Types } from "mongoose";

const discussionSchema = new Schema({
  author: { type: Types.ObjectId, ref: "User" },
  classroom: { type: Types.ObjectId, ref: "Classroom" },
  content: String,
  createdAt: { type: Date, default: Date.now },
});

export default model("Discussion", discussionSchema);