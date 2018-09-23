import React from 'react'

export default props => {
  if (props.conditional) {
    return props.children
  } else {
    return false
  }
}
