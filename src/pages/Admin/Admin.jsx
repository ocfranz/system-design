import React, { useState } from "react";
import Button from "../../components/Button";
import AdminHeading from "../../components/AdminHeading";
import Input from "../../components/Input";

import InputWithIcon from "../../modules/InputWithIcon";
const Admin = () => {
  const [inputValues, setInputValues] = useState({
    default: "",
    value: "value",
    success: "Success",
    error: "Error",
    labeled_default: "",
    labeled_error: "Error",
    labeled_error_message: "Error",
    labeled_success_message: "Success",
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
      case "labeled-default-input":
        setInputValues({ ...inputValues, labeled_default: event.target.value });
        break;
      case "labeled-error-input":
        setInputValues({ ...inputValues, labeled_error: event.target.value });
        break;
      case "labeled-error-message-input":
        setInputValues({
          ...inputValues,
          labeled_error_message: event.target.value,
        });
        break;
      case "labeled-success-message-input":
        setInputValues({
          ...inputValues,
          labeled_success_message: event.target.value,
        });
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
      <div>
        <AdminHeading children="Text inputs with labels" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Input
            id="labeled-input"
            labeled={true}
            label="Username"
            value={inputValues.labeled_default}
            onChange={(e) => handleOnInputChange(e, "labeled-default-input")}
            placeholder="Username"
          />
          <Input
            id="labeled-input"
            labeled={true}
            label="Username"
            value={inputValues.labeled_error}
            onChange={(e) => handleOnInputChange(e, "labeled-error-input")}
          />
          <Input
            id="labeled-input"
            labeled={true}
            label="Username"
            value={inputValues.labeled_error}
            onChange={(e) => handleOnInputChange(e, "labeled-error-input")}
            error={true}
          />
          <Input
            id="labeled-input"
            labeled={true}
            label="Username"
            value={inputValues.labeled_error}
            onChange={(e) => handleOnInputChange(e, "labeled-error-input")}
            success={true}
          />
        </div>
      </div>
      <div>
        <AdminHeading children="Text inputs with labels and message" />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Input
            id="labeled-input"
            labeled={true}
            label="Username"
            value={inputValues.labeled_error_message}
            onChange={(e) =>
              handleOnInputChange(e, "labeled-error-message-input")
            }
            error={true}
            showMessage={true}
            message="Error notification"
          />
          <Input
            id="labeled-input"
            labeled={true}
            label="Username"
            value={inputValues.labeled_success_message}
            onChange={(e) =>
              handleOnInputChange(e, "labeled-success-message-input")
            }
            success={true}
            showMessage={true}
            message="Positive message"
          />
        </div>
      </div>
      <InputWithIcon />
    </div>
  );
};
export default Admin;
