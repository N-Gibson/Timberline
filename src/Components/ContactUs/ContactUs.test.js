import React from 'react';
import { shallow } from 'enzyme';
import ContactUs from './ContactUs';

describe('ContactUs Component', () => {
  const wrapper = shallow(<ContactUs />);

  it('ContactUs component should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});