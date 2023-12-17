import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import { TaskContextProvider } from "./contexts/taskContext.js";
import axios from "./utils/axios.js";
function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  const addTask = (task) => {};
  const updateTask = (id, task) => {};
  const deleteTask = (id) => {};

  const getTasks = async () => {
    try {
      const { data } = await axios.get("/tasks");
      // console.log(response.data);
      setTasks(data.data);
      setLoading(false);
    } catch (e) {
      // console.log(e);
      setLoading(false);
      setError({
        isError: true,
        message: e.message,
      });
    }
  };
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <TaskContextProvider
      value={{ tasks, loading, error, addTask, updateTask, deleteTask }}
    >
      <Navbar />
      <Outlet />
    </TaskContextProvider>
  );
}

export default App;
