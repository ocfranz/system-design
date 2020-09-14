import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "../../components/Input";
import AdminHeading from "../../components/AdminHeading";
const InputList = ({}) => {
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
    <div>
      <AdminHeading children="Text inputs" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "20px",
        }}
      >
        <Input
          id="default-input"
          value={inputValues.default}
          placeholder="Placeholder"
          onChange={(e) => handleOnInputChange(e, "default-input")}
        />
        <Input
          id="default-input"
          value={inputValues.success}
          placeholder="Placeholder"
          onChange={(e) => handleOnInputChange(e, "success-input")}
          success={true}
        />
        <Input
          id="default-input"
          value={inputValues.error}
          placeholder="Placeholder"
          onChange={(e) => handleOnInputChange(e, "error-input")}
          error={true}
        />
      </div>
      <AdminHeading children="Text inputs with labels" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "20px",
        }}
      >
        <Input
          id="default-input"
          value={inputValues.labeled_success_message}
          placeholder="Placeholder"
          onChange={(e) =>
            handleOnInputChange(e, "labeled-success-message-input")
          }
          success={true}
          labeled={true}
          label="Username"
          message="Correct value"
          showMessage={true}
        />
        <Input
          id="default-input"
          value={inputValues.labeled_error_message}
          placeholder="Placeholder"
          onChange={(e) =>
            handleOnInputChange(e, "labeled-error-message-input")
          }
          error={true}
          labeled={true}
          label="Username"
          message="Wrong value"
          showMessage={true}
        />
      </div>
    </div>
  );
};

InputList.propTypes = {};

export default InputList;
