import React from 'react';
import { DataTypes } from './DataTypes';
import { useGetData } from './useGetData';

interface VariableValue {
    meaning: string
    setMeaning(value: string): void
    uniqueData(uniqueData: DataTypes[]): string[]
}

export function FIlter( { meaning, setMeaning, uniqueData }: VariableValue) {
    const {data} = useGetData()
    const changeHandler = (e:  React.ChangeEvent<HTMLSelectElement>) => setMeaning(e.target.value)

    return (
    <div
        className='w-80 h-16 py-2 px-4 mb-2 mt-2
                bg-blue-400 font-mono text-lg
                float-left'
    >
        <select
            className='py-2 px-4
                bg-gray-600 text-white
                border-4 border-black'
            value={meaning}
            onChange={changeHandler}>
            {uniqueData(data).map(item => {
                return <option>{item}</option>
            })
            }
        </select>
    </div>
    )
}
