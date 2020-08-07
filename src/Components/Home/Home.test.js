import React from 'react';
import { shallow } from 'enzyme';
import './Home';

describe('Home', () => {
  const wrapper = shallow(<Home />);
  
  it('Home component should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});