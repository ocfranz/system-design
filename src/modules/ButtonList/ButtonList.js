import React from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import AdminHeading from "../../components/AdminHeading";
const ButtonList = (props) => {
  return (
    <div>
      <AdminHeading children="Buttons" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button children="Info button" handleOnClick={() => {}} info={true} />
        <Button
          children="Success button"
          handleOnClick={() => {}}
          success={true}
        />
        <Button children="Error button" handleOnClick={() => {}} error={true} />
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
  );
};

ButtonList.propTypes = {};

export default ButtonList;
