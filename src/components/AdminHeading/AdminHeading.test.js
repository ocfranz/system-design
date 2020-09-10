import React from "react";
import { render } from "@testing-library/react";
import AdminHeading from "./AdminHeading";

describe("<Admin Heading />", () => {
  it("should render a <span> tag with", () => {
    const {container} = render(<AdminHeading children="heading" />);
    expect(container.querySelector("span")).not.toBeNull();
  });
  it("should have a class attribute", () => {
    const {container} = render(<AdminHeading children="heading" />);
    expect(container.querySelector("span").hasAttribute("class")).toBe(true);
  });
});
