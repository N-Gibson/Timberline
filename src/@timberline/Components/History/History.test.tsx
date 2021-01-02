import React from 'react'
import { shallow } from 'enzyme'
import History from '.'

describe('History', () => {
  const wrapper = shallow(<History />)

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
