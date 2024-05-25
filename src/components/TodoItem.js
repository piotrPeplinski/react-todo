import React from "react";

const TodoItem = ({ task, changeStatus, deleteTask }) => {
  
  const handleChange = () => {
    changeStatus(task.id)
  }

  return (
    <div>
      <p>{task.id}</p>
      <p>{task.text}</p>
      <p>{task.completed}</p>
      <input type="checkbox" checked={task.completed} onChange={()=>handleChange()} />
      <button onClick={()=>deleteTask(task.id)}>Delete</button>
    </div>
  );
}
export default TodoItem;
