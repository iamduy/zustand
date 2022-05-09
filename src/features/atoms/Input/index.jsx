import React from "react";
import { Input } from "antd";
const BaseInput = ({ ...props }) => {
  return <Input {...props} />;
};
BaseInput.TextArea = Input.TextArea;
BaseInput.Password = Input.Password;
BaseInput.Search = Input.Search;
export default BaseInput;
