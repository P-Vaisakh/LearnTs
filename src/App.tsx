import React, { useReducer, useState } from "react";
import "./App.css";
import InputFeild from "./Components/InputFeild";
import { Action, Todo } from "./models";
import TodoList from "./Components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const TodoReducer = (state: Todo[], action: Action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          { id: Date.now(), todo: action.payload, isDone: false },
        ];

      case "delete":
        return state.filter((todo) => todo.id !== action.payload);

      case "done":
        return state.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: true } : todo
        );
      case "edit":
        return state.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, todo: action.payload.task }
            : todo
        );
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(TodoReducer, []);

  return (
    <div
      className="App"
      style={{
        background: "#fefefe",
        height: "100vh",
        width: "100%",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginTop: "30px" }}>Taskify</h2>
      <InputFeild todos={state} dispatch={dispatch}></InputFeild>
      <TodoList todos={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
