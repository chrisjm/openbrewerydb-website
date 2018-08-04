import React, { Component } from 'react';
import axios from 'axios';

class BreweryList extends Component {
  state = {
    breweries: []
  }

  componentDidMount() {
    axios.get(`https://api.openbrewerydb.org/breweries`)
      .then(res => {
        console.log(res);
        const breweries = res.data
        this.setState({ breweries })
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    return (
      <div>
        <ul></ul>
      </div>
    );
  }
}

export default BreweryList;