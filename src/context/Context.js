import React, { createContext, useState } from 'react'
import { getSleep } from '../api'

export const SleepContext = createContext()
SleepContext.displayName = 'Sleep Context'

export const SleepProvider = ({ children }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
        {
            label: 'Dataset 1',
            data: [],
            borderColor: 'orange',
            backgroundColor: 'orange',
        },
    ],
})
  const [table, setTable] = useState([])
  let [queryDefault, setQueryDefault ] = useState('')
  const [arrayData, setArrayData] = useState([])

  const user = JSON.parse(localStorage.getItem('profile'))
  
  const updateChart = async (query, pagination) => {

    try {

      let newQuery;

      if(query  !== '' || queryDefault !== '') {
        setQueryDefault(query)
        newQuery = `${queryDefault || query}&user=${user}&page=${pagination}&limit=7`
      } else {
        newQuery = `?user=${user}&page=${pagination}&limit=7`
      }


      console.log(queryDefault)
      
      const { data } = await getSleep(newQuery)
      setArrayData(data)
      
      console.log('data', data)

        const newData = data.map(data => {
            return data.hour
        })

       const labels = data.map(data => {
            return data.date
        })

        const dataGraphic = {
            labels,
            datasets: [
                {
                    label: 'Dataset 1',
                    data: newData,
                    borderColor: 'orange',
                    backgroundColor: 'orange',
                },
            ],
        };
        setChartData(dataGraphic)

        setTable(data)

    } catch (error) {
        console.log(error)
    }
}


  return (
    <SleepContext.Provider
      value={ {updateChart, chartData, table, user, queryDefault, setQueryDefault, arrayData} }
    >
      {children}
    </SleepContext.Provider>
  )
}
