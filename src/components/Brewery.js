import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Brewery extends PureComponent {
  render() {
    const { brewery } = this.props
    return (
      <li>
        <span>{brewery.name}, </span>
        <span>{brewery.address}, </span>
        <span>{brewery.city}, </span>
        <span>{brewery.state}</span>
      </li>
    )
  }
}

Brewery.propTypes = {
  brewery: PropTypes.object.isRequired
}

export default Brewery
