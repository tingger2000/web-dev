import TodoItem from "./todo-item";
import todos from "./todos.json";
import React from "react";

const TodoList = () => {
  return (
    <div className="my-3">
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => {
          return <TodoItem todo={todo} />;
        })}
      </ul>
    </div>
  );
};
export default TodoList;
