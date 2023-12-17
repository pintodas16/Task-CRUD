import Tasks from "../components/tasks/Tasks.jsx";
import { useTaskContext } from "../contexts/taskContext.js";
function HomePage() {
  const { loading, error, tasks } = useTaskContext();
  const { isError, message } = error;
  // console.log(isError, message);
  // console.log(loading, error, tasks);
  // let decide what content to show
  let content;
  if (loading && !isError) {
    // console.log(loading, isError);
    content = <h5>Loading.....</h5>;
  }
  if (!loading && isError) {
    console.log(loading, isError);
    content = <h5>{message}</h5>;
  }
  if (!loading && !isError && tasks?.length < 0) {
    content = <h5> there is no task </h5>;
  }
  if (!loading && !isError && tasks?.length > 0) {
    content = <Tasks />;
  }
  return <>{content}</>;
}
export default HomePage;
