import { Modal } from "antd";
import React from 'react';
const BaseModal = ({ children, ...others }) => {
  <Modal {...others}>{children}</Modal>
}

export default BaseModal