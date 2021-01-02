import React from 'react'
import { shallow } from 'enzyme'
import { ContactUs } from './index'

describe('ContactUs Component', () => {
  //@ts-ignore
  const wrapper = shallow(<ContactUs />)

  it('ContactUs component should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})