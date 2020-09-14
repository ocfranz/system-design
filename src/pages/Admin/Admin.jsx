import React from "react";

import IconInputList from "../../modules/IconInputList";
import InputList from "../../modules/InputList";
import ButtonList from "../../modules/ButtonList";
import SelectList from "../../modules/SelectList";
const Admin = () => {
  return (
    <div style={{ margin: "0px 200px 30px 200px" }}>
      <div style={{ padding: "20px 0px 0px 0px" }}>
        <span style={{ fontSize: "22px" }}>Welcome, Admin</span>
      </div>
      <ButtonList />
      <InputList />
      <IconInputList />
      <SelectList />
    </div>
  );
};
export default Admin;
