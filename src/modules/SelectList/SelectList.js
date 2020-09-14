import React from "react";
import PropTypes from "prop-types";
import AdminHeading from "../../components/AdminHeading";
import Select from "../../components/Select";
const SelectList = ({}) => {
  const handleOnSelect = () => {};
  return (
    <div>
      <AdminHeading children="Select inputs" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "20px",
        }}
      >
        <Select
          options={["One", "two"]}
          id="select-example"
          onOptionSelected={handleOnSelect}
        />
      </div>
      <AdminHeading children="Select inputs with label" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "20px",
        }}
      >
        <Select
          options={["user", "admin", "moderator"]}
          id="select-example"
          labeled={true}
          label="Select a rol"
          onOptionSelected={handleOnSelect}
        />
      </div>
    </div>
  );
};

SelectList.propTypes = {};

export default SelectList;
