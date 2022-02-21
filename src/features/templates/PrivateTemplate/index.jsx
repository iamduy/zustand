import { Layout } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'

const { Content } = Layout
const PrivateTemplate = ({ children, ...others }) => {
  return (
    <div {...others}>
      <Content>{children}</Content>
    </div>
  )
}
PrivateTemplate.propTypes = {
  children: PropTypes.any
}
export default React.memo(PrivateTemplate)
