import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import { TaskContextProvider } from "./contexts/taskContext.jsx";

function App() {
  return (
    <TaskContextProvider>
      <Navbar />
      <Outlet />
    </TaskContextProvider>
  );
}

export default App;
