import React from 'react'
import {spacexContext} from '../context/ContextProvider'

import Button from './Button'

function FilterBox() {

    const {year, successLaunch, successLand, launchYears, 
        filterLaunch, filterLand, filterYear, clearAllFilters} = React.useContext(spacexContext)
       
    return (
            <div className='filters'>
                <p>Filter Years</p>
                <hr/>
                <div  className = 'year-container'>
                    {launchYears.length ? launchYears.map(ly => 
                    <button key = {ly} 
                        style = { year === ly.toString() ? { backgroundColor : '#4b9e44c0'} : null }
                        onClick= {(e) => filterYear(e.target.innerHTML) }
                        id='year-box' 
                        className = 'year-box' >
                        {ly}
                    </button>
                    ): null }
                </div>
                <p>Successfull Launch</p>
                <hr/>
                <div className = 'year-container'>
                    <Button filter = {filterLaunch} status = {successLaunch}/>
                </div>
                <p>Successfull Land</p>
                <hr/>
                <div className = 'year-container' style={{marginBottom:'1em'}}>
                    <Button filter = {filterLand} status = {successLand}/>
                </div>
                <p>Clear all Filters</p>
                <hr/>
                <div className = 'year-container' style={{marginBottom:'1em'}}>
                    <button 
                        id='land-true' 
                        disabled = {year === '' && successLand === '' && successLaunch === ''}
                        onClick = {() => clearAllFilters()} 
                        className= 'clear-filter'>
                            Clear Filters
                    </button>
                </div>
            </div>
    )
}

export default FilterBox