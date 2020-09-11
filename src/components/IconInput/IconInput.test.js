import React from "react";
import { render, fireEvent } from "@testing-library/react";
import IconInput from "./IconInput";
describe("<IconInput />", () => {
  let value, onChangeHandler, id;
  beforeAll(() => {
    value = "";
    onChangeHandler = jest.fn();
    id = "test-input";
  });
  it("should render a input with its icon", () => {
    const { container } = render(
      <IconInput id={id} value={value} onChange={onChangeHandler} />
    );
    expect(container.querySelector("input")).not.toBeNull();
    expect(container.querySelector("label")).not.toBeNull();
  });
  it("should have an id", () => {
    const { container } = render(
      <IconInput id={id} value={value} onChange={onChangeHandler} />
    );
    expect(container.querySelector("input").id).toBe(id);
  });
  it("should handle correctly an onChange event", () => {
    const { container } = render(
      <IconInput id={id} value={value} onChange={(e) => onChangeHandler(e)} />
    );
    const input = container.querySelector("input");
    fireEvent.change(input, {
      target: { value: "a" },
    });
    expect(input.value).toBe(value);
  });
});
