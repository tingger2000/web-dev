import React from "react";
import { Link } from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list";
import ReduxExamples from "./redux-examples";

const Labs = () => {
  return (
    <>
      <h1>Labs</h1>
      <Link to="/hello">Hello</Link> |<Link to="/tuiter">Tuiter</Link>
      <ReduxExamples />
      <div className="mt-3">
        <hr />
        <h2>React Examples</h2>
        <ConditionalOutput />
        <Styles />
        <Classes />
        <TodoList />
      </div>
    </>
  );
};
export default Labs;
