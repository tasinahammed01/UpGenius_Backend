import { Schema, model, Types } from "mongoose";

const submissionSchema = new Schema({
  student: { type: Types.ObjectId, ref: "User" },
  assignment: { type: Types.ObjectId, ref: "Assignment" },
  fileUrl: String,
  submittedAt: Date,
});

export default model("Submission", submissionSchema);