import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  it("Renders <Button /> correctly", () => {
    const { getByText } = render(
      <Button
        children="Simple button"
        handleOnClick={() => {
          console.log();
        }}
      />
    );
    expect(getByText("Simple button")).toBeInTheDocument();
  });
});
