import React from 'react';
import { useState, useEffect } from 'react';
import { DataTypes } from './DataTypes';
import axios from 'axios'

export function GetData() {
  const [Data, SetData] = useState<DataTypes[]>([])

  async function GetDataFromSevrev() {
      const response = await axios.get<DataTypes[]>('https://api.spacexdata.com/v3/launches')
      console.log(response)
      SetData(response.data)
  }

  useEffect( () => {
      GetDataFromSevrev()
  }, [])

  return {Data}

}
