import React from "react";
import Button from "../../components/Button";
import AdminHeading from "../../components/AdminHeading";
const Admin = () => {
  return (
    <div>
      <div>Admin page</div>
      <div>
        <h2>Components</h2>
        <AdminHeading children="Buttons" />
        <div>
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
    </div>
  );
};
export default Admin;
