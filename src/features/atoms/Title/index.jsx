import React from "react";
import { Typography } from "antd";
import PropTypes from 'prop-types';

const { Title } = Typography;
const BaseTitle = ({ children, ...props }) => {
  return (
    <Title  {...props}>
      {children}
    </Title>
  );
};
BaseTitle.propTypes = {
  children: PropTypes.node
}
export default React.memo(BaseTitle);
