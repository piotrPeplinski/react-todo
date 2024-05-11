import React from "react";

const TodoItem = ({ task }) => {
  

  return (
    <div>
      <p>{task.id}</p>
      <p>{task.text}</p>
      <p>{task.completed}</p>
    </div>
  );
}
export default TodoItem;
