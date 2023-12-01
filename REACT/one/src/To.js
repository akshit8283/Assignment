import React, { useState } from "react";

function To() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Buy groceries",
      completed: false,
    },
    {
      id: 2,
      text: "Do laundry",
      completed: false,
    },
    {
      id: 3,
      text: "Write a report",
      completed: false,
    },
  ]);
   
  function handleAddTodo() {
    const newTodo = {
      id: Math.random().toString(36).substring(7),
      text: "",
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  function handleChangeTodo(id, text) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    setTodos(newTodos);
  }

      function handleCompleteTodo(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = true;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function handleDeleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleCompleteTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
         type="text"
        placeholder="Add a new to-do"
        onChange={(e) => handleAddTodo(e.target.value)}
          />
    </div>
  );
}

export default To;