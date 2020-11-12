import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';

describe('Footer', () => {
  const wrapper = shallow(<Footer />);

  it('Footer component should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
