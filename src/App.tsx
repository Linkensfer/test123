import React from 'react';
import { DataTypes } from './DataTypes';
import { GetData } from './GetData';
import { useState, useEffect } from 'react';
import { Rocket } from './Decor';
import { FIlter } from './Filter';

function App() {
  const {Data} = GetData()
  const [valueSiteName, setValueSiteName] = useState<string>('')
  const [valueRocketName, setValueRocketName] = useState<string>('')
  const [newData, setNewData] = useState<DataTypes[]>([])

  // фиксация события: изменение значения valueSiteName для соответствующего фильтра в компоненте Filter
  const createEventSiteName = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValueSiteName(event.target.value)
  }

  // фиксация события: изменение значения valueRocketName для соответствующего фильтра в компоненте Filter
  const createEventRocketName = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValueRocketName(event.target.value)
  }

  // функция последовательной фильтрации; запись в newData отфильтрованных значений массива при изменении значений в фильтрах valueSiteName и valueRocketName
  function FilteredData(Data: DataTypes[]) {
    const xx = (valueSiteName === '') ? Data : (Data.filter( item => {
      return item.launch_site.site_name === valueSiteName}))
    const yy = (valueRocketName === '') ? xx : (xx.filter( item => {
      return item.rocket.rocket_name === valueRocketName}))

    setNewData(yy)
    console.log(newData)
  }

  // функция поиска строкового массива уникальных значений для фильтра site_name
  function uniqueDataSiteName(uniqueData: DataTypes[]) {
    const uniqueDataSiteName = uniqueData.reduce<string[]>((acc, item) => {
        return (acc.includes(item.launch_site.site_name) ? acc : [...acc, item.launch_site.site_name])
    }, [] as string[])
    console.log(uniqueDataSiteName)
    return [''].concat(uniqueDataSiteName)
  }

  // функция поиска строкового массива уникальных значений для фильтра rocket_name
  function uniqueDataRocketName(uniqueData: DataTypes[]) {
    const uniqueDataRocketName = uniqueData.reduce<string[]>((acc, item) => {
        return (acc.includes(item.rocket.rocket_name) ? acc : [...acc, item.rocket.rocket_name])
    }, [] as string[])
    console.log(uniqueDataRocketName)
    return [''].concat(uniqueDataRocketName)
  }

  // отслеживание изменений компонентов страницы по значению valueSiteName с помощью useEffect; вызов функции фильтрации FilteredData
  useEffect( () => {
    FilteredData(Data)
  }, [valueSiteName])

  // отслеживание изменений компонентов страницы по значению valueRocketName с помощью useEffect; вызов функции фильтрации FilteredData
  useEffect( () => {
    FilteredData(Data)
  }, [valueRocketName])

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
            props={ item }
            key={ item.flight_number }
          />)
      }

    </>
  )
}

export default App;
