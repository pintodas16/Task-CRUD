import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "must provide name"],
      trim: true,
      maxLength: [40, "name can not be more than 40 characters"],
    },
    description: {
      type: String,
      required: [true, "must provide description"],
      trim: true,
      maxLength: [250, "name can not be more than 250 characters"],
    },
    status: {
      type: String,
      enum: ["Created", "Pending", "In-Progress", "Completed"],
      default: "Created",
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
