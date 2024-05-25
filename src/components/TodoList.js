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

  const changeStatus = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div>
      <TodoInput addTask={addTask} />
      <h3>Todo</h3>
      <ul>
        {tasks.map((task) => (
          <li>
            {task.completed ? (
              <TodoItem key={task.id} task={task} changeStatus={changeStatus} deleteTask={deleteTask}/>
            ) : null}
          </li>
        ))}
      </ul>
      <h3>Completed</h3>
      <ul>
      {tasks.map((task) => (
          <li>
            {task.completed ? (
              null
            ) : <TodoItem key={task.id} task={task} changeStatus={changeStatus} />}
          </li>
        ))}</ul>
    </div>
  );
};
export default TodoList;
