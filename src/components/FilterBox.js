import React from 'react'
import {spacexContext} from '../context/ContextProvider'

export default function FilterBox() {

    const {launchYears, filterLunch, filterLand} = React.useContext(spacexContext)

    return (
        <section>
            <div className='filters'>
            <p>Filter Years</p>
            <hr/>
            <div  className = 'year-container'>
                {launchYears.map(ly => <button className = 'year-box' key = {ly}>{ly}</button>)}
            </div>
            <p>Successfull Launch</p>
            <hr/>
            <div className = 'year-container'>
                <button onClick = {() => filterLunch(true)} className= 'year-box'>True</button>
                <button onClick = {() => filterLunch(false)} className= 'year-box'>False</button>
            </div>
            <p>Successfull Land</p>
            <hr/>
            <div className = 'year-container' style={{marginBottom:'1em'}}>
                <button onClick = {() => filterLand(true)} className= 'year-box'>True</button>
                <button onClick = {() => filterLand(false)} className= 'year-box'>False</button>
            </div>
            </div>
        </section>
    )
}
