import React, { useState, useEffect } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { getSleep } from '../../api'
import { SleepContext } from '../../context/Context'



const TableSleep = () => {

    const [table, setTable] = useState([])
    const user = JSON.parse(localStorage.getItem('profile'))

    const getTable = async () => {

        try {
            const { data } = await getSleep()

            let newTable = data.filter(dados => dados.user === user)

            newTable = newTable.slice(0,7)

            setTable(newTable)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getTable()
    }, [])

    if (!user) {
        <h1>Faça login para continuar</h1>
    } else {
        return (
            <TableContainer>
                <Table variant='striped' colorScheme='orange'>
                    <TableCaption>Duração de sono</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Data</Th>
                            <Th>Hora ao deitar</Th>
                            <Th>Hora ao levantar</Th>
                            <Th>Horas dormidas</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            table.map(column => (
                                <Tr>
                                    <Td>{column.date}</Td>
                                    <Td>{column.sleepHour}</Td>
                                    <Td>{column.wakeUpHour}</Td>
                                    <Td>{column.hour}</Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        )
    }
}

export default TableSleep