import { fireEvent, render, screen } from "@testing-library/react";
import Login from ".";

describe("ID, Password 입력 테스트", () => {
  it("ID 입력 테스트", () => {
    render(<Login />);
    const input = screen.getByPlaceholderText("id") as HTMLInputElement;
    fireEvent.change(input, { target: { name: "id", value: "asdasdasd" } });
    expect(input.value).toBe("asdasdasd");
  });

  it("Password 입력 테스트", () => {
    render(<Login />);
    const input = screen.getByPlaceholderText("password") as HTMLInputElement;
    fireEvent.change(input, { target: { name: "password", value: "mynameis" } });
    expect(input.value).toBe("mynameis");
    expect(input.value).toHaveLength(8);
  });
});
