import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

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
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
        <TodoInput addTask={addTask}/>
      <ul>
        {tasks.map((task) => (
          <li>
            <TodoItem key={task.id} task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
