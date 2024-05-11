import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      completed: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      completed: false,
    },
  ]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    // setTasks([tasks, newTask]);
    // setText("");
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} />
      ))}
    </div>
    
  );
};
export default TodoList;
