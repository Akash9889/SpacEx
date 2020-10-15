import React from 'react'
import axios from 'axios'

import {launchYears} from '../constants'

const spacexContext = React.createContext()

function ContextProvider({children}) {
    
    const [shuttles, setShuttles]   = React.useState([])
    const [year, setYear]           = React.useState('')
    const [firstLoad, setFirstLoad] = React.useState(true)
    const [loading, setLoading]     = React.useState(true)
    const [error, setError]         = React.useState('')
    const [lazy, setLazy]           = React.useState(1)
    const [successLaunch, setSuccessLaunch] = React.useState()
    const [successLand, setSuccessLand]     = React.useState()
    
    React.useEffect( () => {
        setFirstLoad(true)
        setTimeout( () => {
            setFirstLoad(false)
        }, 500)
    }, [])
    
    
    React.useEffect(() => {
        const time = setTimeout(() => {
            ( async function(){
                try{
                    setLoading(true)
                    let query = `https://api.spacexdata.com/v3/launches?limit=${12*lazy}`
                    if(year || year !== '' || year !== undefined)
                        query +=`&launch_year=${year}`
                    if(successLaunch)
                        query +=`&launch_success=true`
                    if(successLaunch===false)
                        query +=`&launch_success=false`
                    if(successLand)
                        query +=`&land_success=true`
                    if(successLand === false)
                        query +=`&land_success=false`
                    
                        const projects = await axios.get(query)
                    setShuttles(prev => [...prev, ...projects.data.slice(prev.length, (lazy*12) ) ] )
                    setLoading(false)
                }
                catch(error){
                    setError(error)
                    throw new Error(error)
                }
            })()
        }, 300)
        return () => clearTimeout(time)
    }, [year, successLaunch, successLand, lazy])


    const filterYear    = React.useCallback((ear) => { 
        setShuttles([])
        setYear(ear); 
        setLazy(1); 
    }, [year])

    const filterLunch   = React.useCallback((launch) => {
        setShuttles([])
        setSuccessLaunch(launch)
        setLazy(1);
    }, [successLaunch])
    
    const filterLand    = React.useCallback((land) => {
        setShuttles([])
        setSuccessLand(land)
        setLazy(1);
    }, [successLand])
    
    const lazyLoad      = React.useCallback(() => setLazy(prev => prev + 1), [lazy] ) 

    const value = {
        firstLoad,
        shuttles,
        loading,
        launchYears,
        filterYear,
        filterLunch,
        filterLand,
        lazyLoad
    }
    
    return (
        <spacexContext.Provider value = {value}>
            {children}
        </spacexContext.Provider>
    )
}
export default React.memo(ContextProvider)
export {spacexContext}