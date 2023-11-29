import dotenv from "dotenv";
import connectDB from "./config/db.js";
import tasks from "./data/tasks.js";
import Task from "./models/task.js";
dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Task.deleteMany();
    const createdTask = await Task.insertMany(tasks);
    console.log("Data inserted successfully");
    process.exit(1);
  } catch (e) {
    console.log(`Error${e.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Task.deleteMany();
    console.log("Data deleted successfully");
    process.exit(1);
  } catch (e) {
    console.log(`Error${e.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else if (process.argv[2] === "-i") {
  importData();
}
