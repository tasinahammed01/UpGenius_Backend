import { Schema, model, Types } from "mongoose";

const messageSchema = new Schema({
  sender: { type: Types.ObjectId, ref: "User" },
  recipient: { type: Types.ObjectId, ref: "User" },
  content: String,
  sentAt: { type: Date, default: Date.now },
  read: { type: Boolean, default: false },
});

export default model("Message", messageSchema);
