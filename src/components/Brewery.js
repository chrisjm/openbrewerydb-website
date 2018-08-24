import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Brewery extends PureComponent {
  render() {
    const { brewery } = this.props
    const {
      name,
      street,
      city,
      state,
      postal_code,
      country,
      longitude,
      latitude,
      brewery_type
    } = brewery
    let bgColor
    let address

    if (city !== '' && state !== '') {
      if (street === '')
        address = encodeURIComponent(`${name}, ${city}, ${state}`)
      else {
        address = encodeURIComponent(`${name}, ${street}, ${city}, ${state}`)
      }
    } else {
      address = null;
    }

    switch(brewery.brewery_type) {
      case 'micro':
      case 'regional':
      case 'large':
        bgColor = 'bg-green text-white'
        break
      case 'brewpub':
        bgColor = 'bg-orange text-white'
        break
      default:
        bgColor = 'bg-grey-light text-grey'
    }

    return (
      <div className={`p-4 mb-2 rounded ${bgColor}`}>
        { (Object.keys(brewery).length !== 0) ?
          <div>
            <address className="roman">
              <div className="text-lg mb-2">
                <span className="font-bold">{name}</span>
                <span> ({brewery_type})</span>
              </div>
              { street !== '' ? <div>{street}</div> : '' }
              <div>
                { city !== '' ? <span>{city}, </span> : '' }
                { state !== '' ? <span>{state}, </span> : '' }
                { postal_code !== '' ? <span>{postal_code}, </span> : '' }
                { country !== '' ? <span>{country} </span> : '' }
              </div>
              <div>
                Geo Coordinates: {latitude}/{longitude}
              </div>
            </address>
            { address ?
              <div>
                <a
                  class="text-white"
                  href={`https://www.google.com/maps/search/?api=1&query=${address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Map
                </a>
              </div>
              : ''
            }
          </div>
          :
          <span>No brewery selected.</span>
        }
      </div>
    )
  }
}

Brewery.propTypes = {
  brewery: PropTypes.object.isRequired
}

export default Brewery
