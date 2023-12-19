import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "must provide name"],
      trim: true,
      maxLength: [20, "name can not be more than 20 characters"],
    },
    description: {
      type: String,
      required: [true, "must provide description"],
      trim: true,
      maxLength: [250, "name can not be more than 250 characters"],
    },
    status: {
      type: String,
      enum: ["Pending", "In-Progress", "Completed"],
      default: "Pending",
    },
    due_date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Task = mongoose.model("Task", taskSchema);

export default Task;
