/*
*   Referencias
*    1. https://medium.freecodecamp.org/how-to-build-your-own-react-boilerplate-2f8cbbeb9b3f
*    2. https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf
*/

import App from './app'
import React from 'react'
import {shallow} from 'enzyme'
describe('App', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('div').text()).toBe('Welcome to React Boilerplate App')
    expect(wrapper).toMatchSnapshot()
  })
})