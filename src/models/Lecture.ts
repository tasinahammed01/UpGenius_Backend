import { Schema, model, Types } from "mongoose";


const lectureSchema = new Schema({
  title: String,
  videoUrl: String,
  classroom: { type: Types.ObjectId, ref: "Classroom" },
  uploadedBy: { type: Types.ObjectId, ref: "User" },
});

export default model("Lecture", lectureSchema);