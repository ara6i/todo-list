import React, { useState } from "react";
import { useStore } from "../store/store";

import TodoItem from "./TodoItem";
function TodoList() {
  const todos = useStore((state) => state.todos);
  console.log(todos);
  const addTodo = useStore((state) => state.addTodo);
  const deleteTodo = useStore((state) => state.deleteTodo);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== "") {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    deleteTodo(index);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-400 mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow px-4 py-2 mr-2 border border-gray-300"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white font-bold"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onDelete={() => handleDeleteTodo(index)}
        />
      ))}
    </div>
  );
}

export default TodoList;
