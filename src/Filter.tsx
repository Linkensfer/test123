import React from 'react';
import { DataTypes } from './DataTypes';
import { GetData } from './GetData';
// import { Dispatch } from 'react';
// import { SetStateAction } from 'react';

interface variableValue {
    meaning: string
    setMeaning(e: React.ChangeEvent<HTMLSelectElement>): void
    uniqueData(uniqueData: DataTypes[]): string[]
    // valueRocketName: string
    // setValueRocketName: Dispatch<SetStateAction<string>> // чтобы функцию не прокидывать и не писать сложную типизацию, на уровень выше (в App) подняты createEventSiteName и createEventRocketName
}

export function FIlter( { meaning, setMeaning, uniqueData }: variableValue) {
    const {Data} = GetData()

    return (
    <div
        className='w-100 h-100 py-2 px-4 mb-2
                bg-blue-400'
    >
        <select
            className='py-2 px-4
                bg-gray-600 text-white
                border-4 border-black'
            value={meaning}
            onChange={setMeaning}>
            {uniqueData(Data).map(item => {
                return <option>{item}</option>
            })
            }
        </select>
        {/*этот пиздец оставлю на память, почему нужно ф-ию фильтрации вынести на уровень выше в App:
        чтобы прокидывать props от родительского компонента в дочерний,
        потому что если в дочернем писать, то на уровень выше логику не поднять ->
        фильтры универсально не реализовать*/}
        {/* <select
            value={meaning}
            onChange={createEventRocketName}>
            {uniqueDataRocketName(Data).map(item => {
                return <option>{item}</option>
            })
            }
        </select> */}
    </div>
    )
}
