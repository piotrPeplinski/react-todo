import React, { useState } from "react";

const TodoInput = ({addTask}) => {
  const [todoText, setTodoText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={()=>{
        addTask(todoText)
        setTodoText('')
        }}>Add</button>
    </div>
  );
};

export default TodoInput