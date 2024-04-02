import "./index.css";

import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";

interface ToDoStateIF {
  id: number;
  content: string;
  complete: boolean;
}

const ToDoList = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [write, setWrite] = useState<string>("");
  const [todos, setTodos] = useState<ToDoStateIF[]>([]);

  const checkValidation = (write: string) => {
    return write !== "";
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWrite(e.target.value);
  };

  const onAction = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    switch (e.key) {
      case "Enter":
        if (checkValidation(write)) {
          const newTodos = { id: todos.length, content: write, complete: false };
          const addTodos = todos.concat(newTodos);
          setTodos([...addTodos]);
          setWrite("");
        } else {
          alert("내용을 입력해 주세요.");
          inputRef.current?.focus();
          return;
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="todo-list-container">
      <input
        className="todo-list-insert"
        ref={inputRef}
        value={write}
        onChange={onChange}
        onKeyDown={onAction}
        maxLength={15}
        placeholder="할 일을 작성해 주세요."
      />
      <ul id="todo-list" className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <input className="todo-checkbox" type="checkbox" checked={todo.complete} />
            <span className="todo-content">{todo.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
