import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from './HelloWorld';

it('renders welcome message', () => {
  const msg = 'learn react';
  const wrapper = shallow(<HelloWorld msg={msg} />);
  const h1 = wrapper.find('h1');
  expect(h1.text()).toEqual(msg);
});
