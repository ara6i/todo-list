import React from "react";

function TodoItem({ todo, onDelete }) {
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        className="mr-2"
        checked={todo.completed}
        onChange={() => {}}
      />
      <span className={todo.completed ? "line-through" : ""}>{todo}</span>
      <button className="ml-auto text-red-500" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
