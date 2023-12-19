import { useContext } from "react";
import { TaskContext } from "./taskContext.jsx";

function useTaskContext() {
  return useContext(TaskContext);
}
export default useTaskContext;
