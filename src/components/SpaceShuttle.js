import React from 'react'

export default function SpaceShuttle({sample}) {
    return (
        <>
            <img id = 'mission-patch' src = {sample.links.mission_patch_small} alt = 'mission-patch'/>
            <span className= 'box-contents'>
                <p>{`${sample.rocket.rocket_name} #${sample.flight_number}`}</p>
                <p>Mission id: <span>{sample.mission_id}</span></p>
                <p>Launch year:  <span>{sample.launch_year}</span></p>
                <p>Successfull launching:<span>{
                    !sample.launch_success ? 
                    sample.launch_success === null ? 'NA' : 'False' : 'True' 
                    }</span>
                </p>
                <p>Successfull landing: <span>{
                    !sample.rocket.first_stage.cores[0].land_success ?
                    sample.rocket.first_stage.cores[0].land_success === null ? 'NA' : 'False': 'True' 
                    }</span>
                </p>
            </span>
        </>
    )
}
