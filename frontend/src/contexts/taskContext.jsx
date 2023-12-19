import { createContext, useEffect, useReducer } from "react";
import axios from "../utils/axios.js";

const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
  error: "",
  isEditing: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "task/getTasks": {
      // console.log(action.payload);
      return {
        ...state,
        tasks: action.payload,
        isLoading: false,
        isError: false,
      };
    }
    case "task/created": {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        isLoading: false,
        isError: false,
      };
    }
    case "task/deleted": {
      const id = action.payload;
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== id),
        isLoading: false,
        isError: false,
      };
    }
    case "task/updated": {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        isLoading: false,
        isError: false,
      };
    }
    case "task/rejected":
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

const TaskContext = createContext();
function TaskContextProvider({ children }) {
  const [{ isLoading, isError, error, tasks }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const getTasks = async () => {
    dispatch({ type: "loading" });
    try {
      const response = await axios.get("/tasks");
      // dispatch("task/getTasks", response.data.data);
      dispatch({ type: "task/getTasks", payload: response.data.data });
    } catch (error) {
      dispatch({ type: "task/rejected" });
    }
  };
  const createTask = async (task) => {
    dispatch({ type: "loading" });
    try {
      const response = await axios.post("/tasks", JSON.stringify(task));
      dispatch({ type: "task/created", payload: response.data.data });
    } catch (error) {
      // console.log(error.response.data.message);
      dispatch({ type: "task/rejected", payload: error.response.data.message });
    }
  };
  const deleteTask = async (id) => {
    dispatch({ type: "loading" });
    try {
      await axios.delete(`/tasks/${id}`);
      dispatch({ type: "task/deleted", payload: id });
    } catch (err) {
      dispatch({ type: "task/rejected", payload: error.response.data.message });
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{ isLoading, isError, error, tasks, createTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TaskContextProvider };
