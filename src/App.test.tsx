import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("카운트 상승 테스트", () => {
  test("첫 런데링 > 카운트: 0", () => {
    render(<App />);

    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("0");
  });

  test("Plus 버튼 클릭 > 카운트: 1", () => {
    render(<App />);

    const button = screen.getByText("Plus");
    fireEvent.click(button);

    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("1");
  });

  test("Minus 버튼 클릭 > 카운트: 0 / 버튼 2회 누적", () => {
    render(<App />);

    const plus = screen.getByText("Plus");
    fireEvent.click(plus);

    const minus = screen.getByText("Minus");
    fireEvent.click(minus);

    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("0");
  });
});
