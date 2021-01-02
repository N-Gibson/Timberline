import React from 'react'
import { shallow } from 'enzyme'
import { ContactForm } from '@timberline/Components'

describe('ContactForm', () => {
  const wrapper = shallow(<ContactForm />)
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
