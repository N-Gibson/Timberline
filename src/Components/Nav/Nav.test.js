import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './Nav';

describe('Nav', () => {
  const wrapper = shallow(<Nav />);
  
  it('Nav component should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});