import React from "react";

import IconInputList from "../../modules/IconInputList";
import InputList from "../../modules/InputList";
import ButtonList from "../../modules/ButtonList";
import Select from "../../components/Select";
const Admin = () => {
  const handleOnSelect = () => {};

  return (
    <div style={{ margin: "0px 200px 30px 200px" }}>
      <div style={{ padding: "20px 0px 0px 0px" }}>
        <span style={{ fontSize: "22px" }}>Welcome, Admin</span>
      </div>
      <ButtonList />
      <InputList />
      <IconInputList />
      <div>
        Select
        <Select
          options={["One", "two"]}
          id="select-example"
          onOptionSelected={handleOnSelect}
        />
        <Select
          options={["One", "two"]}
          id="select-example"
          labeled={true}
          label="Select"
          onOptionSelected={handleOnSelect}
        />
      </div>
    </div>
  );
};
export default Admin;
