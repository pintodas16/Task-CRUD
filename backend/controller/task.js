import asyncHandler from "../middleware/asyncHandler.js";
import Task from "../models/task.js";

//@dest     fetch all tasks
//@route    GET api/tasks
//@access  public
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({});
  if (tasks) {
    res.json({
      total: tasks.length,
      data: tasks,
    });
  } else {
    res.status(404);
    throw new Error("task not found ");
  }
});
//@dest     fetch single task with id
//@route    GET api/tasks/:id
//@access  public
const getTaskById = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    res.json(task);
  } else {
    res.status(404);
    throw new Error("Task not found ");
  }
});

// @desc      Add task
// @route     POST /api/tasks
// @access    public
const createTask = asyncHandler(async (req, res) => {
  // console.log(req, res);
  const { title, description, status, due_date } = req.body;
  console.log(title, description, status, due_date);
  const taskExist = await Task.findOne({ title });
  // console.log(taskExist);
  if (taskExist) {
    res.status(400);
    throw new Error("Task already exist");
  }
  // console.log("hello");
  // create task
  const task = await Task.create({
    title,
    description,
    due_date,
    status,
  });
  // console.log(task);

  if (task) {
    res.status(201).json({
      _success: true,
      data: task,
    });
  } else {
    res.status(400);
    throw new Error("invalid data ");
  }
});

// @desc      delete task
// @route     DELETE /api/tasks/:id
// @access    public

const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (task) {
    await Task.deleteOne({ _id: task._id });
    res.json({ message: "task removed" });
  } else {
    res.status(404);
    throw new Error(`No task found with the id of ${req.params.id}`);
  }
});

// @desc      update task
// @route     put /api/tasks/:id
// @access    public
const updateTask = asyncHandler(async (req, res) => {
  let task = await Task.findById(req.params.id);
  if (!task) {
    res.status(404);
    throw new Error(`No task found with the id of ${req.params.id}`);
  }
  console.log(req.body);
  task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  task.save();

  res.status(200).json({
    success: true,
    data: task,
  });
});
export { createTask, deleteTask, getTaskById, getTasks, updateTask };
