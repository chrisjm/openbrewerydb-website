import React, { Component } from 'react'
import axios from 'axios'
import BreweryList from '../components/BreweryList'
import SearchForm from './SearchForm'

class BrewerySearch extends Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }
  
  state = {
    breweries: []
  }

  handleSearch(query) {
    const params = { q: query }

    console.log(params)

    axios.get(`https://api.openbrewerydb.org/breweries`, { params: params })
      .then(res => {
        const breweries = res.data
        this.setState({ breweries })
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log("Request made")
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log("Request made no response")
          console.log(error.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Request error")
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
  }

  render() {
    const { breweries } = this.state

    return (
      <div>
        <SearchForm handleSubmit={this.handleSearch} />
        <BreweryList breweries={breweries} />
      </div>
    )
  }
}

export default BrewerySearch
