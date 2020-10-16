import React from 'react'

export default function Button({filter, status }) {
    return (
        <>
             <button  
                id='launch-true' 
                style = { status === true ? { backgroundColor : '#4b9e44c0'} : null }
                onClick = {() => filter(true)} 
                className= 'year-box'>
                    True
            </button>
            <button 
                onClick = {() => filter(false)} 
                style = { status === false ? { backgroundColor : '#4b9e44c0'} : null }
                className= 'year-box'>
                    False
            </button>
        </>
    )
}
