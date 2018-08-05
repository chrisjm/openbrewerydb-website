import React, { Component } from 'react'

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    console.log(this.state.value)
    event.preventDefault()
    this.props.handleSubmit(this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} placeholder="e.g. 'san diego' or 'ohio'" />
        <input type="submit" value="Search" />
      </form>
    )
  }
}

export default SearchForm
