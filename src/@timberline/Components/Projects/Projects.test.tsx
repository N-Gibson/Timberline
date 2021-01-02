import React from 'react'
import { shallow } from 'enzyme'
import { Projects } from '@timberline/Components'

describe('Projects Component', () => {
  const wrapper = shallow(<Projects />)

  it('Projects component should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
