import React, { PureComponent } from 'react'
import Brewery from './Brewery'

class BreweryList extends PureComponent {
  render() {
    const { breweries } = this.props
    return (
      <div>
        <ul>
          {breweries.map((brewery) => <Brewery key={brewery.id} brewery={brewery} />)}
        </ul>
      </div>
    )
  }
}

export default BreweryList
