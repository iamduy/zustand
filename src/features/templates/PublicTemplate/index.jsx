import { Layout } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'

const { Content } = Layout
const PublicTemplate = ({ children, ...others }) => {
  return (
    <div {...others}>
      <Content>{children}</Content>
    </div>
  )
}
PublicTemplate.propTypes = {
  children: PropTypes.any
}
export default React.memo(PublicTemplate)
