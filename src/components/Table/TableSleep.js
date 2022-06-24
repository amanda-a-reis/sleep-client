import React, { useState, useEffect, useContext } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { SleepContext } from '../../context/Context'



const TableSleep = () => {

    const { updateChart, user, table } = useContext(SleepContext)

    useEffect(() => {
        updateChart()
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