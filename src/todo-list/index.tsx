import "./index.css";

import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";

interface ToDoStateIF {
  id: string;
  content: string;
}

const ToDoList = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [write, setWrite] = useState<string>("");
  const [todos, setTodos] = useState<ToDoStateIF[]>([]);
  const [completes, setComplets] = useState<{ [key: string]: boolean }>({});

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
          const newId = `${todos.length}`;
          const newTodos = { id: newId, content: write };
          const addTodos = todos.concat(newTodos);
          setTodos([...addTodos]);
          setComplets({ ...completes, [newId]: false });
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

  const toggleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;
    setComplets({
      ...completes,
      [name]: checked,
    });
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
            <input
              aria-label={todo.id}
              className="todo-checkbox"
              type="checkbox"
              name={todo.id}
              checked={completes[todo.id]}
              onChange={toggleCheckbox}
            />
            <span className="todo-content">{todo.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
