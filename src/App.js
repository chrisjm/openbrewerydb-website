import React, { Component } from 'react';
import BrewerySearch from './containers/BrewerySearch'

class App extends Component {
  render() {
    return (
      <div className="container mx-auto mt-8 mb-4">
        <BrewerySearch />
      </div>
    );
  }
}

export default App;
