import { Schema, model, Types } from "mongoose";

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["student", "teacher", "admin"], default: "student" },
  badges: [{ type: Types.ObjectId, ref: "Badge" }],
});

export default model("User", userSchema);
