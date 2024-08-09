import React from 'react';
import { DataTypes } from './DataTypes';

interface SpaceXProps {
    rocketInfo: DataTypes
}

export function Rocket ({ rocketInfo } : SpaceXProps) {
    const date = new Date(Date.parse(rocketInfo.launch_date_local))
    const res = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`

    return (
        <div
            className='py-2 px-4 mb-4
                bg-blue-500 text-white
                font-serif text-xl
                rounded-3xl border-4 border-black
                clear-left'
        >
            <img 
                className='w-30 h-30 py-2 px-4 mb-2'
                src={rocketInfo.links.mission_patch_small}
                alt={rocketInfo.mission_name}
            />
            <p>{ rocketInfo.mission_name }</p>
            <p>{ res }</p>
            <p>{ rocketInfo.details }</p>

        </div>
    )
}
