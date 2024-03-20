import React from 'react';
import { DataTypes } from './DataTypes';

interface SpaceXProps {
    props: DataTypes
}

export function Rocket ({ props } : SpaceXProps) {
    const date = new Date(Date.parse(props.launch_date_local))
    const res = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    console.log(date)
    console.log(res)

    return (
        <div
            className='w-100 h-100 py-2 px-4 mb-4
                bg-blue-500 text-white
                rounded-3xl border-4 border-black 
                '
        >
            <img 
                className='w-50 h-50 py-2 px-40 mb-2'
                src={props.links.mission_patch_small}
                alt={props.mission_name}
            />
            <p>{ props.mission_name }</p>
            <p>{ res }</p>
            <p>{ props.details }</p>

        </div>
    )
}
