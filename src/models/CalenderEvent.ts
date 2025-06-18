import { Schema, model, Types } from "mongoose";

const calendarEventSchema = new Schema({
  title: String,
  start: Date,
  end: Date,
  classroom: { type: Types.ObjectId, ref: "Classroom" },
});

export default model("CalendarEvent", calendarEventSchema);
