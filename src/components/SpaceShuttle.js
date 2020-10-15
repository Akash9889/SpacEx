import React from 'react'

export default function SpaceShuttle({sample}) {
    return (
        <>
            <img id = 'mission-patch' src = {sample.links.mission_patch_small} alt = 'mission-patch'/>
            <span className= 'box-contents'>
                <p>{`${sample.rocket.rocket_name} #${sample.flight_number}`}</p>
                <p>Mission id: {sample.mission_id}</p>
                <p>Launch year: {sample.launch_year}</p>
                <p>Successfull launching:{
                    !sample.launch_success ? 
                    sample.launch_success === null ? 'NA' : 'False' : 'True' 
                    }
                </p>
                <p>Successfull landing: {
                    !sample.rocket.first_stage.cores[0].land_success ?
                    sample.rocket.first_stage.cores[0].land_success === null ? 'NA' : 'False': 'True' 
                    }
                </p>
            </span>
        </>
    )
}
