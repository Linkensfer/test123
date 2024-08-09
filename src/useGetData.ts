import React from 'react';
import { useState, useEffect } from 'react';
import { DataTypes } from './DataTypes';
import axios from 'axios'

export function useGetData() {
  const [data, setData] = useState<DataTypes[]>([])

  async function getDataFromSevrev() {
      const response = await axios.get<DataTypes[]>('https://api.spacexdata.com/v3/launches')
      setData(response.data)
  }

  useEffect( () => {
      getDataFromSevrev()
  }, [])

  return {data}

}
