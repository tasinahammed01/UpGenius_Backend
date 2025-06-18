import { Schema, model, Types } from "mongoose";

const quizSchema = new Schema({
  topic: String,
  questions: [
    {
      question: String,
      options: [String],
      answer: String,
    },
  ],
  createdBy: { type: Types.ObjectId, ref: "User" },
});

export default model("Quiz", quizSchema);