import React from "react";

import IconInputList from "../../modules/IconInputList";
import InputList from "../../modules/InputList";
import ButtonList from "../../modules/ButtonList";
const Admin = () => {
  return (
    <div style={{ margin: "0px 200px" }}>
      <div style={{ padding: "20px 0px 0px 0px" }}>
        <span style={{ fontSize: "22px" }}>Welcome, Admin</span>
      </div>
      <ButtonList />
      <InputList />
      <IconInputList />
    </div>
  );
};
export default Admin;
