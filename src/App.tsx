import React from 'react';
import { DataTypes } from './DataTypes';
import { useGetData } from './useGetData';
import { useState, useEffect } from 'react';
import { Rocket } from './Decor';
import { FIlter } from './Filter';

function App() {
  const {data} = useGetData()
  const [valueSiteName, setValueSiteName] = useState<string>('')
  const [valueRocketName, setValueRocketName] = useState<string>('')
  const [newData, setNewData] = useState<DataTypes[]>([])

  // фиксация события: изменение значения valueSiteName для соответствующего фильтра в компоненте Filter
  const createEventSiteName = (value: string) => { setValueSiteName(value) }

  // фиксация события: изменение значения valueRocketName для соответствующего фильтра в компоненте Filter
  const createEventRocketName = (value: string) => { setValueRocketName(value) }

  // функция последовательной фильтрации; запись в newData отфильтрованных значений массива при изменении значений в фильтрах valueSiteName и valueRocketName
  function filteredData(data: DataTypes[]) {
    const dataBySiteName = (valueSiteName === '') ? data : (data.filter( item => {
      return item.launch_site.site_name === valueSiteName}))
    const dataByRocketName = (valueRocketName === '') ? dataBySiteName : (dataBySiteName.filter( item => {
      return item.rocket.rocket_name === valueRocketName}))

    setNewData(dataByRocketName)
  }

  // функция поиска строкового массива уникальных значений для фильтра site_name
  function uniqueDataSiteName(uniqueData: DataTypes[]) {
    const uniqueDataSiteName = uniqueData.reduce<string[]>((acc, item) => {
        if (!acc.includes(item.launch_site.site_name)) {
          acc.push(item.launch_site.site_name)
        }
        return acc
    }, [] as string[])
    return [''].concat(uniqueDataSiteName)
  }

  // функция поиска строкового массива уникальных значений для фильтра rocket_name
  function uniqueDataRocketName(uniqueData: DataTypes[]) {
    const uniqueDataRocketName = uniqueData.reduce<string[]>((acc, item) => {
        if (!acc.includes(item.rocket.rocket_name)) {
          acc.push(item.rocket.rocket_name)
        }
        return acc
    }, [] as string[])
    return [''].concat(uniqueDataRocketName)
  }

  // отслеживание изменений компонентов страницы по значениям valueSiteName и valueRocketName с помощью useEffect; вызов функции фильтрации filteredData
  useEffect( () => {
    filteredData(data)
  }, [valueSiteName, valueRocketName])

  return (
    <>
      <h1>Launches</h1>
      <FIlter
        meaning={valueSiteName}
        setMeaning={createEventSiteName}
        uniqueData={uniqueDataSiteName}
      />

      <FIlter
        meaning={valueRocketName}
        setMeaning={createEventRocketName}
        uniqueData={uniqueDataRocketName}
      />

      { newData.map(item =>
          <Rocket 
            rocketInfo={ item }
            key={ item.flight_number }
          />)
      }

    </>
  )
}

export default App;
