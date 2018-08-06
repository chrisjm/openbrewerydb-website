import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Brewery extends PureComponent {
  render() {
    const { brewery } = this.props
    return (
      <li className="p-4 mb-2 rounded bg-grey-light">
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
