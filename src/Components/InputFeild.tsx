import React, { useState } from "react";
import { Action, Todo } from "../models";

interface Props {
  dispatch: React.Dispatch<Action>;
  todos: Todo[];
}

const InputFeild: React.FC<Props> = ({ todos, dispatch }) => {
  const [newTodo, setNewTodo] = useState<string>("");
  return (
    <div style={{ marginTop: "30px" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add", payload: newTodo });
          setNewTodo("");
        }}
      >
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          placeholder="enter task here"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default InputFeild;
