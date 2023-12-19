import Loading from "../components/Loading.jsx";
import Error from "../components/error.jsx";
import Tasks from "../components/tasks/Tasks.jsx";
import useTaskContext from "../contexts/useTaskHook.js";

function HomePage() {
  const { isLoading, tasks, isError, error } = useTaskContext();
  // let decide what content to show
  // console.log(isLoading, tasks, error, isError);
  // const isLoading = true;
  // const error = "";
  // const tasks = [];
  let content;
  if (isLoading && !isError) {
    // console.log(loading, isError);
    content = <Loading />;
  }
  if (!isLoading && isError) {
    // console.log(isLoading, error);
    content = <Error error={error} />;
  }
  if (!isLoading && !isError && tasks?.length <= 0) {
    content = <h5> there is no task </h5>;
  }
  if (!isLoading && !isError && tasks?.length > 0) {
    content = <Tasks />;
  }
  return <>{content}</>;
}
export default HomePage;
