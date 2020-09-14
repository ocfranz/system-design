import React, { useState } from "react";

import MailIcon from "./MailIcon";

import Icon from "../../components/Input";
import AdminHeading from "../../components/AdminHeading";
const InputWithIcon = (props) => {
  const [values, setValues] = useState({
    input_icon_default: "",
    input_icon_success: "example@mail.com",
    input_icon_error: "example.com",
  });
  const handleOnInputChange = (event, id) => {
    switch (id) {
      case "default-input":
        setValues({ ...values, input_icon_default: event.target.value });
        break;
      case "default-input-success":
        setValues({ ...values, input_icon_success: event.target.value });
        break;
      case "default-input-error":
        setValues({ ...values, input_icon_error: event.target.value });
        break;
      default:
        throw new Error("Error input id");
    }
  };

  return (
    <div>
      <AdminHeading children="Text inputs with icons" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "20px",
        }}
      >
        <Icon
          id="default-input"
          label="mail"
          value={values.input_icon_default}
          onChange={(e) => handleOnInputChange(e, "default-input")}
          childrenIcon={<MailIcon />}
          icon={true}
          placeholder="Email"
        />
        <Icon
          id="default-input"
          label="mail"
          value={values.input_icon_success}
          onChange={(e) => handleOnInputChange(e, "default-input-success")}
          childrenIcon={<MailIcon />}
          success={true}
          icon={true}
          placeholder="Email"
        />
        <Icon
          id="default-input"
          label="mail"
          value={values.input_icon_error}
          onChange={(e) => handleOnInputChange(e, "default-input-error")}
          childrenIcon={<MailIcon />}
          error={true}
          icon={true}
          placeholder="Email"
        />
      </div>
      <AdminHeading children="Text inputs with icons and feedback messages" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "20px",
        }}
      >
        <Icon
          id="default-input"
          label="mail"
          value={values.input_icon_default}
          onChange={(e) => handleOnInputChange(e, "default-input")}
          childrenIcon={<MailIcon />}
          icon={true}
          placeholder="Email"
        />
        <Icon
          id="default-input"
          label="mail"
          value={values.input_icon_success}
          onChange={(e) => handleOnInputChange(e, "default-input-success")}
          childrenIcon={<MailIcon />}
          success={true}
          showMessage={true}
          icon={true}
          message="Correct email"
          placeholder="Email"
        />
        <Icon
          id="default-input"
          label="mail"
          value={values.input_icon_error}
          onChange={(e) => handleOnInputChange(e, "default-input-error")}
          childrenIcon={<MailIcon />}
          error={true}
          showMessage={true}
          icon={true}
          message="Incorrect email"
          placeholder="Email"
        />
      </div>
    </div>
  );
};

InputWithIcon.propTypes = {};

export default InputWithIcon;
