import { createContext, useContext } from "react";

export const TaskContext = createContext({
  tasks: [],
  loading: true,
  error: "",
  addTask: (task) => {},
  updateTask: (id, task) => {},
  deleteTask: (id) => {},
});

export const TaskContextProvider = TaskContext.Provider;

export const useTaskContext = () => {
  return useContext(TaskContext);
};
