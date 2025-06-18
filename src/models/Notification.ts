import { Schema, model, Types } from "mongoose";

const notificationSchema = new Schema({
  recipient: { type: Types.ObjectId, ref: "User" },
  message: String,
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default model("Notification", notificationSchema);