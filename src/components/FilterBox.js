import React from 'react'
import {spacexContext} from '../context/ContextProvider'

export default function FilterBox() {

    const {launchYears, filterLaunch, filterLand, filterYear} = React.useContext(spacexContext)

    return (
            <div className='filters'>
                <p>Filter Years</p>
                <hr/>
                <div  className = 'year-container'>
                    {launchYears.length ? launchYears.map(ly => 
                    <button key = {ly} 
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
                    <button  id='launch-true' onClick = {() => filterLaunch(true)} className= 'year-box'>True</button>
                    <button onClick = {() => filterLaunch(false)} className= 'year-box'>False</button>
                </div>
                <p>Successfull Land</p>
                <hr/>
                <div className = 'year-container' style={{marginBottom:'1em'}}>
                    <button id='land-true' onClick = {() => filterLand(true)} className= 'year-box'>True</button>
                    <button onClick = {() => filterLand(false)} className= 'year-box'>False</button>
                </div>
            </div>
    )
}
