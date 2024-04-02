import { fireEvent, render, screen } from "@testing-library/react";
import ToDoList from ".";

describe("", () => {
  test("", () => {
    render(<ToDoList />);
    const input = screen.getByPlaceholderText("할 일을 작성해 주세요.") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "첫 번째" } });
    expect(input).toHaveAttribute("value", "첫 번째");

    fireEvent.keyDown(input, { key: "Enter" });

    const todoList = screen.getByText("첫 번째");
    expect(todoList).toBeVisible();

    expect(input).toHaveAttribute("value", "");
  });
});
