import React from "react";
import Button from "../../components/Button";
const Admin = () => {
  return (
    <div>
      <div>Admin page</div>
      <div>
        <h2>Components</h2>
        <div>
          <Button
            children="simple button"
            handleOnClick={() => {}}
            info={true}
          />
          <Button
            children="simple button"
            handleOnClick={() => {}}
            success={true}
          />
          <Button
            children="simple button"
            handleOnClick={() => {}}
            error={true}
          />
          <Button
            children="simple button"
            handleOnClick={() => {}}
            outline={true}
          />
        </div>
      </div>
    </div>
  );
};
export default Admin;
