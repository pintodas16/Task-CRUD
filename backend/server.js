import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import taskRouter from "./routes/tasks.js";
dotenv.config();
const port = process.env.PORT;

connectDB(); //connect the mongodb

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/api", (req, res) => {
  res.send("server is running ");
});

app.use("/api/tasks", taskRouter);
app.use(errorHandler);
app.use(notFound);
app.listen(port, () => console.log(`server is running ${port}`));
