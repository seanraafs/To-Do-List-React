function toDoListButton(props) {
  let id = props.id;
  let currentTasks = props.tasks.findIndex((item) => item.id == id);
  let previousTasks = currentTasks - 1;
  let nextTasks = currentTasks + 1;

  let prevButton = "";
  if (props.tasks[previousTasks] !== undefined) {
    prevButton = "👆";
  } else {
    previousTasks = "";
  }

  let nextButton = "";
  if (props.tasks[nextTasks] !== undefined) {
    nextButton = "👇";
  } else {
    nextTasks = "";
  }

  return (
    <>
      <span>
        <button onClick={() => props.move(currentTasks, previousTasks)}>
          {prevButton}
        </button>
      </span>
      <span>
        <button onClick={() => props.move(currentTasks, nextTasks)}>
          {nextButton}
        </button>
      </span>
      <span>
        <button onClick={() => props.remove(props.id)}>🗑️</button>
      </span>
    </>
  );
}

export default toDoListButton;
