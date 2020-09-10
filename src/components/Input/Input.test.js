import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";
describe("<Input />", () => {
  let value, handleOnChange;
  beforeAll(() => {
    value = "";
    handleOnChange = (event) => {
      value = event.target.value;
    };
  });
  it("should render a input with its label", () => {
    const { container } = render(
      <Input id="test-input" value={value} onChange={handleOnChange} />
    );
    expect(container.querySelector("input")).not.toBeNull();
    expect(container.querySelector("label")).not.toBeNull();
  });
  it("should have an id", () => {
    const id = "test-input";
    const { container } = render(
      <Input id={id} value={value} onChange={handleOnChange} />
    );
    expect(container.querySelector("input").id).toBe(id);
  });
  it("should handle correctly an onChange event", () => {
    const id = "test-input";
    const { container } = render(
      <Input id={id} value={value} onChange={(e) => handleOnChange(e)} />
    );

    fireEvent.change(container.querySelector("input"), {
      target: { value: "a" },
    });
    expect(container.querySelector("input").value).toBe(value);
  });
});
