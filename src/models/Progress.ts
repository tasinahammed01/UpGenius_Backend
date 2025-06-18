import { model, Schema, Types } from "mongoose";

const progressSchema = new Schema({
  userId: { type: Types.ObjectId, ref: "User" },
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
});

export default model("Progress", progressSchema);
