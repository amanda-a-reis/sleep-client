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

  const user = JSON.parse(localStorage.getItem('profile'))
  
  const updateChart = async (query) => {

    try {
        const { data } = await getSleep(query)

        let newData = data.filter(dados => dados.user === user)

        newData = newData.map(data => {
            return data.hour
        })

        newData = newData.slice(0,7)

        let labels = data.filter(dados => dados.user === user)

       labels = labels.map(data => {
            return data.date
        })

        labels = labels.slice(0,7)

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

        let newTable = data.filter(dados => dados.user === user)

        newTable = newTable.slice(0,7)

        console.log('table',newTable)

        setTable(newTable)

    } catch (error) {
        console.log(error)
    }
}


  return (
    <SleepContext.Provider
      value={ {updateChart, chartData, table, user} }
    >
      {children}
    </SleepContext.Provider>
  )
}
