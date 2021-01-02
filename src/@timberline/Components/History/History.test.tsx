import React from 'react'
import { shallow } from 'enzyme'
import { History } from '@timberline/Components'

describe('History', () => {
  const wrapper = shallow(<History />)

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
