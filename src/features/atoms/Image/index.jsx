import { Image } from "antd";
import React from "react";
const BaseImage = ({ ...props }) => {
  return <Image preview={false} {...props} />
}
export default BaseImage;