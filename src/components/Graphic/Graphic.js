import React, { useState, useEffect, useContext } from 'react';
import { Box, Button, Text } from '@chakra-ui/react'
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
    const { updateChart, chartData, queryDefault } = useContext(SleepContext)
    const user = JSON.parse(localStorage.getItem('profile'))
    const [page, setPage] = useState(1)

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
        if(page > 0) updateChart(queryDefault, page)
    }, [page])

    if (!chartData || !user) {
        return <Box>
        </Box>
    } else {
        return (
            <Box display='flex' flexDirection='column' alignItems='center' >
                <Line options={options} data={chartData} />
                <Box>
                    <Text bg='orange' padding='15px 25px' borderRadius='50%' mb={5} mt={5} color='white'>{page > 0 ? page : '1'}</Text>
                </Box>
                <Box>
                    <Button colorScheme='orange' onClick={() => {page > 0 ? setPage(page - 1): setPage(1)}}>voltar</Button>
                    <Button colorScheme='orange' ml={15} onClick={() => setPage(page + 1)}>próximo</Button>
                </Box>
            </Box>
        )
    }
}

export default Graphic