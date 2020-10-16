import React from 'react';
import {shallow, mount} from 'enzyme'

import FilterBox from './FilterBox';
import ContextProvider from '../context/ContextProvider'
import {launchYears} from '../constants'

describe('FilterBox component tests', () => {
    const initialState = {
        launchYears : [],
        filterLaunch : jest.fn(), 
        filterLand :jest.fn(),
        filterYear: jest.fn()
    }

    const setup = (state = initialState) => {
        const mockContext = jest.fn().mockReturnValue({
            launchYears :state.launchYears,
            filterLaunch : state.filterLaunch,
            filterLand : state.filterLand,
            filterYear: state.filterYear
        })
  
       return  React.useContext = mockContext
  }

  const renderComponent = () => {
    return shallow(
        <ContextProvider>
          <FilterBox/>
        </ContextProvider>
        ).dive().dive()
  }

  test('should render without any error', () => {
    setup()
    const wrapper = renderComponent()
    expect(wrapper.find('.filters').length).toBe(1)
  })

  test(`should contains number of year-box buttons equal to the launchYears array's length`, () =>{
    setup({ launchYears: launchYears })
    const wrapper = renderComponent()
    expect(wrapper.find('#year-box').length).toEqual(launchYears.length)
  })
  
  test(`on passing launchYears Array button text should be same as launchYears value`, () => {
    setup({ launchYears: [2006, 2007, 2008] })
    const wrapper = renderComponent()
    const buttonText = wrapper.find('#year-box').at(0).text()
    expect(buttonText).toBe('2006')
  })


  test(`onClick year button filterYear call with the event`, () => {
    const mockFilterYear = jest.fn()
    setup({ launchYears: [2006, 2007, 2008], filterYear : mockFilterYear })
    const event = {target: { innerHTML : '2006' } }
    const wrapper = renderComponent()
    wrapper.find('#year-box').at(0).simulate('click', event)
    expect(mockFilterYear).toHaveBeenCalledWith('2006')
  })

  test(`onClick 'True' button in Success Launch, filterLaunch method get called with 'true' `, () => {
    const mockFilterLaunch = jest.fn()
    setup({ launchYears : launchYears, filterLaunch : mockFilterLaunch })
    const wrapper = renderComponent()
    wrapper.find('#launch-true').simulate('click')
    expect(mockFilterLaunch).toHaveBeenCalledWith(true)
  })

  test(`onClick 'True' button in Success land, filterLand method get called with 'true' `, () => {
    const mockFilterLand = jest.fn()
    setup({ launchYears : launchYears, filterLand : mockFilterLand })
    const wrapper = renderComponent()
    wrapper.find('#land-true').simulate('click')
    expect(mockFilterLand).toHaveBeenCalledWith(true)
  })

})