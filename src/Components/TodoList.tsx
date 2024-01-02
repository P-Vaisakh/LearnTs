import React from "react";
import { Action, Todo } from "../models";
import TodoComponents from "./TodoComponents";

interface Props {
  todos: Todo[];
  dispatch: React.Dispatch<Action>;
}

const TodoList: React.FC<Props> = ({ todos, dispatch }) => {
  return (
    <ul>
      {todos.map((i) => (
        <TodoComponents todo={i} key={i.id} todos={todos} dispatch={dispatch} />
      ))}
    </ul>
  );
};

export default TodoList;
