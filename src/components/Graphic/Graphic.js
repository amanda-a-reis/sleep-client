import React, { useState, useEffect, useContext } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getSleep } from '../../api/index'
import { SleepContext } from '../../context/Context'
import {Box} from '@chakra-ui/react'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Gráfico do sono',
        },
    },
};

function Graphic() {
    const { updateChart, chartData } = useContext(SleepContext)
    const user = JSON.parse(localStorage.getItem('profile'))

    // const getTable = async () => {

    //     try {
    //         const { data } = await getSleep()

    //         let newData = data.filter(dados => dados.user === user)

    //         newData = newData.map(data => {
    //             return data.hour
    //         })

    //         newData = newData.slice(0,7)

    //         let labels = data.filter(dados => dados.user === user)

    //        labels = labels.map(data => {
    //             return data.date
    //         })

    //         labels = labels.slice(0,7)

    //         const dataGraphic = {
    //             labels,
    //             datasets: [
    //                 {
    //                     label: 'Dataset 1',
    //                     data: newData,
    //                     borderColor: 'orange',
    //                     backgroundColor: 'orange',
    //                 },
    //             ],
    //         };

    //         console.log(data)
    //         setData(dataGraphic)

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        updateChart()
    }, [])

    if (!chartData || !user) {
        return <Box>
        </Box>
    } else {
        return <Line options={options} data={chartData} />;
    }
}

export default Graphic