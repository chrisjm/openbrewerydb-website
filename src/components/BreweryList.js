import React, { PureComponent } from 'react'
import Brewery from './Brewery'

class BreweryList extends PureComponent {
  render() {
    const { breweries } = this.props
    return (
      <div className="p-6 rounded bg-grey-lighter">
        <ul className="list-reset">
          {breweries.map((brewery) => <Brewery key={brewery.id} brewery={brewery} />)}
        </ul>
      </div>
    )
  }
}

export default BreweryList
