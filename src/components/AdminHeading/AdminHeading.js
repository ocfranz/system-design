import React from "react";
import PropTypes from "prop-types";

import { AdminHeadingStyled } from "./AdminHeading.styles";
const AdminHeading = ({ children }) => {
  return <AdminHeadingStyled>{children}</AdminHeadingStyled>;
};

AdminHeading.defaultProps = {
  children: "Default heading",
};

AdminHeading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AdminHeading;
