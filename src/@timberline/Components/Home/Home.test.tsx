import React from 'react'
import { shallow } from 'enzyme'
import { Home } from '@timberline/Components'

describe('Home', () => {
  const wrapper = shallow(<Home />)

  it('Home component should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
