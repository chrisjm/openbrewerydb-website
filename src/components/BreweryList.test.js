import React from 'react'
import { render } from 'react-testing-library'
import BreweryList from './BreweryList'

describe('BreweryList', ()=> {
  it('renders the BreweryList', () => {
    const { container } = render(<BreweryList />)
    const listItems = container.querySelectorAll("li")
    expect(listItems.length).toBe(20)
  })
})
