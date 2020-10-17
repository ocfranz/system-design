import React from "react";
import Input from "./index";

export default {
  title: "System/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "default-input",
  value: "",
  placeholder: "Placeholder",
};

export const DefaultLabeled = Template.bind({});
DefaultLabeled.args = {
  id: "default-input",
  value: "",
  labeled: true,
  success: true,
  placeholder: "Placeholder",
};
