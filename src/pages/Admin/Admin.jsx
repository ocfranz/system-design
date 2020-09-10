import React, { useState } from "react";
import Button from "../../components/Button";
import AdminHeading from "../../components/AdminHeading";
import Input from "../../components/Input";
const Admin = () => {
  const [inputValues, setInputValues] = useState({
    default: "",
    value: "value",
    success: "Success",
    error: "Error",
  });
  const handleOnInputChange = (event, id) => {
    switch (id) {
      case "default-input":
        setInputValues({ ...inputValues, default: event.target.value });
        break;
      case "value-input":
        setInputValues({ ...inputValues, value: event.target.value });
        break;
      case "success-input":
        setInputValues({ ...inputValues, success: event.target.value });
        break;
      case "error-input":
        setInputValues({ ...inputValues, error: event.target.value });
        break;
      default:
        throw new Error("Error input id");
    }
  };
  return (
    <div style={{ margin: "0px 200px" }}>
      <div style={{ padding: "20px 0px 0px 0px" }}>
        <span style={{ fontSize: "22px" }}>Welcome, Admin</span>
      </div>
      <div>
        <h2>Components</h2>
        <AdminHeading children="Buttons" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button children="Info button" handleOnClick={() => {}} info={true} />
          <Button
            children="Success button"
            handleOnClick={() => {}}
            success={true}
          />
          <Button
            children="Error button"
            handleOnClick={() => {}}
            error={true}
          />
          <Button
            children="Outline button"
            handleOnClick={() => {}}
            outline={true}
          />
          <Button
            children="Disabled button"
            handleOnClick={() => {}}
            disabled={true}
          />
        </div>
      </div>
      <div>
        <AdminHeading children="Text inputs" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Input
            id="default-input"
            value={inputValues.default}
            placeholder="Placeholder"
            onChange={(e) => handleOnInputChange(e, "default-input")}
          />
          <Input
            id="value-input"
            placeholder="Placeholder"
            value={inputValues.value}
            onChange={(e) => handleOnInputChange(e, "value-input")}
          />
          <Input
            id="success-input"
            value={inputValues.success}
            success={true}
            onChange={(e) => handleOnInputChange(e, "success-input")}
          />
          <Input
            id="error-input"
            value={inputValues.error}
            error={true}
            onChange={(e) => handleOnInputChange(e, "error-input")}
          />
        </div>
      </div>
    </div>
  );
};
export default Admin;
