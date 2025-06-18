import { Schema, model, Types } from "mongoose";


const badgeSchema = new Schema({
  name: String,
  description: String,
  iconUrl: String,
});

export default model("Badge", badgeSchema);