import { render } from "@testing-library/react";

import List, { ListItem } from ".";

const renderContainer = (itmes: ListItem[]) => {
  const { container } = render(<List items={itmes} />);
  return container;
};

describe("List 컴포넌트 렌더링 테스트", () => {
  test("List 아이템 렌더링", () => {
    const container = renderContainer([
      { id: 1, content: "Hi" },
      { id: 2, content: "My Name TDD" },
    ]);
    expect(container).toHaveTextContent("Hi");
    expect(container).toHaveTextContent("My Name TDD");
  });
});
