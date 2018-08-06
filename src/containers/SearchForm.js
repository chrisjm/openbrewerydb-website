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
      <form onSubmit={this.handleSubmit} className="m-4 sm:m-0 sm:mb-4">
        <input type="text" onChange={this.handleChange} placeholder="e.g. 'san diego' or 'ohio'" className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" />
      </form>
    )
  }
}

export default SearchForm
