import { Schema, model, Types } from "mongoose";


const resourceSchema = new Schema({
  title: String,
  url: String,
  uploadedBy: { type: Types.ObjectId, ref: "User" },
  classroom: { type: Types.ObjectId, ref: "Classroom" },
});

export default model("Resource", resourceSchema);