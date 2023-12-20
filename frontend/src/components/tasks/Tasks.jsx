import { useFilterContext } from "../../contexts/FilterContex.jsx";
import { useTaskContext } from "../../contexts/taskContext.jsx";
import Task from "./Task.jsx";

function Tasks() {
  const { tasks } = useTaskContext();
  const { searchTerm, filterBy, sortBy } = useFilterContext();
  let newTasks;
  if (!searchTerm) {
    console.log(searchTerm, "is empty");
  }
  if (!filterBy) {
    console.log("filter is empty");
  }
  if (!sortBy) {
    console.log("sort is empty");
  }

  newTasks = tasks
    .filter((task) => {
      if (filterBy === "In-Progress") {
        return task.status === "In-Progress";
      } else if (filterBy === "Completed") {
        return task.status === "Completed";
      } else if (filterBy === "Pending") {
        return task.status === "Pending";
      } else {
        return true;
      }
    })
    .filter((task) => {
      return task.title.toLowerCase().includes(searchTerm);
    });

  if (sortBy === "date-ascending") {
    newTasks = newTasks.sort((a, b) => {
      let dateOne = new Date(a.due_date);
      let dateTwo = new Date(b.due_date);

      return dateOne - dateTwo;
    });
  } else if (sortBy === "date-descending") {
    newTasks = newTasks.sort((a, b) => {
      let dateOne = new Date(a.due_date);
      let dateTwo = new Date(b.due_date);

      return dateTwo - dateOne;
    });
  }
  return (
    <main>
      {/* <!-- section container  --> */}
      <div className="container max-w-6xl mx-auto px-10 md:px-6 lg:px-0 mb-10 ">
        {/* <!-- grid contianer  --> */}
        <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-3 transition-all duration-700">
          {/* <!-- single task  --> */}
          {newTasks.map((task) => (
            <Task key={task._id} task={task} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Tasks;
