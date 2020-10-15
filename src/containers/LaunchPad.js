import React from 'react'
import {spacexContext} from '../context/ContextProvider'

import '../App.css';
import SpaceShuttle from '../components/SpaceShuttle'

function LaunchPad({data}) {
    const [element, setElement] = React.useState(null);
    const { lazyLoad }          = React.useContext(spacexContext)
    const loader                = React.useRef( lazyLoad )
    const observer              = React.useRef( 
        new IntersectionObserver(
            entries => {
                const first = entries[0]
                if(first.isIntersecting){
                    loader.current();
                }
            },
            { threshold:1 }
        )
    )

    
    React.useEffect(() => {
        loader.current = lazyLoad
    }, [lazyLoad])

    React.useEffect(() => {
        const currentElement = element
        const currentObserver = observer.current

        if(currentElement){
            currentObserver.observe(currentElement)
        }

        return () => {
            if(currentElement){
                currentObserver.unobserve(currentElement)
            }
        }
    },[element])

    return (
        <div className = 'box-container'>
                {data.map((sample, index) =>{
                if(data.length === index +1){
                    return  <div ref = {setElement} key={sample.flight_number} className='box'>
                                <SpaceShuttle sample ={sample}/>
                            </div>
                }
                else 
                    return  <div key={sample.flight_number} className='box'>
                                <SpaceShuttle sample ={sample}/> 
                            </div>
                })}
            </div>    
    )
}

export default LaunchPad