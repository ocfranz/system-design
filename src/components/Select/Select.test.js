import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Select from "./index";

describe("<Select />", () => {
  let options, handleOnChange;
  beforeAll(() => {
    options = ["One", "Two", "Three"];
    handleOnChange = () => {};
  });
  it("should render a select", () => {
    const { container } = render(
      <Select
        id="test-select"
        options={options}
        onOptionSelected={handleOnChange}
      />
    );
    expect(container.querySelector("select")).not.toBeNull();
    expect(container.querySelector("label")).not.toBeNull();
  });
  it("should render options including its default option", () => {
    const { container } = render(
      <Select
        id="test-select"
        options={options}
        onOptionSelected={handleOnChange}
      />
    );
    expect(container.querySelectorAll("option").length).toBe(
      options.length + 1
    );
  });
  it("should handle correctly on click option event", () => {
    const { container } = render(
      <Select
        id="test-select"
        options={options}
        onOptionSelected={handleOnChange}
      />
    );
    const select = container.querySelector("#test-select");
    fireEvent.change(select, {
      target: { value: options[1] },
    });
    expect(select.value).toBe(options[1]);
  });
});
