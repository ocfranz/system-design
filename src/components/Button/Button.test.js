import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";
describe("<Button />", () => {
  it("Renders <Button /> correctly", () => {
    const { container } = render(
      <Button
        children="Button"
        handleOnClick={() => {
          console.log();
        }}
      />
    );
    expect(container.querySelector("button")).not.toBeNull();
  });
});
