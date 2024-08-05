import { useEffect, useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  const newTask = useRef("");
  const STORAGE = "toDoList-React";
  const [tasks, setTasks] = useState(()=>{
    return JSON.parse(localStorage.getItem(STORAGE)) || [];
  });
  
  useEffect(()=>{
    localStorage.setItem(STORAGE, JSON.stringify(tasks))
    const complete = tasks.filter((item) => item.completed === true).length;
    setTaskCompleted(complete);
  }, [tasks])

  const [taskCompleted, setTaskCompleted] = useState(0);

  function setId() {
    if (tasks == "") {
      return 1;
    } else {
      return tasks[0].id + 1;
    }
  }

  function setCompleted(id) {
    let taskItem = [];
    tasks.map((item, index) => {
      if (item.id == id) {
        taskItem[index] = { ...item, completed: !item.completed };
      } else {
        taskItem[index] = item;
      }
    });
    setTasks(taskItem);
    console.log(taskItem);
  }

  function move(currentIndex, nextIndex) {
    const currentData = tasks[currentIndex];
    const updateData = tasks[nextIndex];

    tasks[currentIndex] = { ...currentData, id: updateData.id };
    tasks[nextIndex] = { ...updateData, id: currentData.id };

    const newData = [...tasks];
    setTasks(newData);
  }

  function remove(id) {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setTasks(tasks.filter((item) => item.id !== id));
    } else {
      return false;
    }
  }

  function addTask(event) {
    event.preventDefault();
    if (newTask.current.value === "") {
      alert("Please input your task");
      return false;
    }
    const data = {
      id: setId(),
      task: newTask.current.value,
      completed: false,
    };

    newTask.current.value = "";
    setTasks([...tasks, data]);
  }

  return (
    <>
      <Form addTask={addTask} newTask={newTask} taskCompleted={taskCompleted} tasks={tasks} />
      <ToDoList
        tasks={tasks}
        setCompleted={setCompleted}
        move={move}
        remove={remove}
      />
    </>
  );
}

export default App;
