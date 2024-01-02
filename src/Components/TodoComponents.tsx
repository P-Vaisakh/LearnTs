import React, { useEffect, useRef, useState } from "react";
import { Action, Todo } from "../models";
import { Edit, Check, Trash } from "react-feather";
interface Props {
  todo: Todo;
  todos: Todo[];
  dispatch: React.Dispatch<Action>;
}
const TodoComponents: React.FC<Props> = ({ todo, todos, dispatch }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [edittodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    dispatch({ type: "edit", payload: { id, task: edittodo } });
    setIsEdit(false);
  };

  const handleDone = (id: number) => {
    dispatch({ type: "done", payload: id });
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "delete", payload: id });
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);

  return (
    <form
      onSubmit={(e) => handleEdit(e, todo.id)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {isEdit ? (
        <input
          value={edittodo}
          onChange={(e) => setEditTodo(e.target.value)}
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s> {todo.todo}</s>
      ) : (
        <p>{todo.todo}</p>
      )}

      <Edit
        onClick={() => {
          if (!isEdit && !todo.isDone) {
            setIsEdit(!isEdit);
          }
        }}
      ></Edit>
      <Check onClick={() => handleDone(todo.id)}></Check>
      <Trash onClick={() => handleDelete(todo.id)}></Trash>
    </form>
  );
};

export default TodoComponents;
