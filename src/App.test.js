import React from 'react';
import {mount, shallow} from 'enzyme'

import App from './App';
import ContextProvider from './context/ContextProvider'
import {mockData} from './mockData'

describe('App component tests', () => {
    const initialState = {
      firstLoad : true, 
      loading : true, 
      shuttles : []
    }

    const setup = (state = initialState) => {
      const mockContext = jest.fn().mockReturnValue({
        firstLoad :state.firstLoad,
        loading : state.loading,
        shuttles : state.shuttles,
      })

      React.useContext = mockContext

    }
  
    const renderComponent = () => {
      return shallow(
          <ContextProvider>
            <App/>
          </ContextProvider>
          ).dive().dive()
    }

    test('should render without any error', () => {
      setup()
      const wrapper = renderComponent()
      expect(wrapper.find('.App').length).toBe(1)
    })

    test(`should only show 'header', 'loader' when 'firstLoader' passed as 'true'`,() => {
      setup({firstLoad:true})
      const wrapper = renderComponent()
      expect(wrapper.find('header').length).toBe(1)
      expect(wrapper.find('.firstloader').length).toBe(1)
      expect(wrapper.find('main').length).toBe(0)
      expect(wrapper.find('FilterBox').length).toBe(0)
      expect(wrapper.find('footer').length).toBe(0)
    } )

    test(`should show 'FilterBox', 'main' and 'footer' when 'firstLoader' passed as 'false' `, () => {
      setup({firstLoad:false })
      const wrapper = renderComponent()

      expect(wrapper.find('main').length).toBe(1)
      expect(wrapper.find('FilterBox').length).toBe(1)
      expect(wrapper.find('footer').length).toBe(1)
    } )
    
   
})