import React from 'react'
import { shallow } from 'enzyme'
import Projects from '.'

describe('Projects Component', () => {
  const wrapper = shallow(<Projects />)

  it('Projects component should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
