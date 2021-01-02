import React from 'react'
import { shallow } from 'enzyme'
import { About } from '@timberline/Components'

describe('About component', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = shallow(<About />)
  })

  it('Should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
