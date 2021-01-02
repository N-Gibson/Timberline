import React from 'react'
import { shallow } from 'enzyme'
import { Nav } from '@timberline/Components'

describe('Nav', () => {
  const wrapper = shallow(<Nav active="true" />)

  it('Nav component should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
