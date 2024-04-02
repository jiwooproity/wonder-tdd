import { fireEvent, render, screen } from "@testing-library/react";
import ToDoList from ".";

const renderToDoList = () => {
  const { container } = render(<ToDoList />);
  const input = screen.getByPlaceholderText("할 일을 작성해 주세요.") as HTMLInputElement;
  return { container, input };
};

const writeToDo = (input: HTMLInputElement, value: string) => {
  fireEvent.change(input, { target: { value: value } });
  expect(input).toHaveAttribute("value", value);
};

const addToDO = (input: HTMLInputElement, value: string) => {
  fireEvent.keyDown(input, { key: "Enter" });
  const todoList = screen.getByText(value);
  expect(todoList).toBeVisible();
  expect(input).toHaveAttribute("value", "");
};

const checkToDo = (checkbox: HTMLInputElement, name: string, result: boolean) => {
  fireEvent.change(checkbox, { target: { name: name, checked: !checkbox.checked } });
  expect(checkbox.checked).toBe(result);
};

describe("ToDo 리스트 화면 동작 테스트", () => {
  test("ToDo 리스트 입력 동작 테스트", () => {
    const { input } = renderToDoList();
    writeToDo(input, "첫 번째");
  });

  test("ToDo 리스트 추가 동작 테스트", () => {
    const { input } = renderToDoList();
    writeToDo(input, "첫 번째");
    addToDO(input, "첫 번째");
    writeToDo(input, "두 번째");
    addToDO(input, "두 번째");
  });

  test("ToDo 리스트 체크박스 동작 테스트", () => {
    const { input } = renderToDoList();
    writeToDo(input, "첫 번째");
    addToDO(input, "첫 번째");

    writeToDo(input, "두 번째");
    addToDO(input, "두 번째");

    checkToDo(screen.getByLabelText("0") as HTMLInputElement, "0", true);
  });

  test("ToDo 리스트 체크박스 더블 클릭 테스트", () => {
    const { input } = renderToDoList();
    writeToDo(input, "첫 번째");
    addToDO(input, "첫 번째");

    checkToDo(screen.getByLabelText("0") as HTMLInputElement, "0", true);
    checkToDo(screen.getByLabelText("0") as HTMLInputElement, "0", false);
  });
});
