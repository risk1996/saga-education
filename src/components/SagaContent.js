import React from 'react'
import PropTypes from 'prop-types'

const SagaContent = ({ content, className }) => (
  <div>
    <p className="has-text-weight-bold">
      {'Sága Education '}
      <span className={className}>{content}</span>
    </p>
  </div>
)

SagaContent.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

export default SagaContent
