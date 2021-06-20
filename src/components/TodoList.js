import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const updateTodo = (id, value) => {
    if (!value || /^\s*$/.test(value)) {
      return;
    }

    setTodos((prev) => prev.map((item) => (item.id === id ? value : item)));
  };

  return (
    <div>
      <h1>What's the plan stan?</h1>
      <TodoForm onSubmit={addTodo}></TodoForm>
      <Todo
        todos={todos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
}

export default TodoList;
