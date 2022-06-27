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
    useMediaQuery,
    Button
} from '@chakra-ui/react'
import { SleepContext } from '../../context/Context'
import {TiDeleteOutline} from 'react-icons/ti'
import { deleteSleep } from '../../api'

const TableSleep = () => {

    const { updateChart, arrayData } = useContext(SleepContext)
    const [mediaQuerieMobile] = useMediaQuery('(max-width: 560px)')


    const deleteData = async (id) => {
        await deleteSleep(id)
        window.location.reload()
        console.log(id)
    }

    useEffect(() => {
        updateChart('')
    }, [])

    if (mediaQuerieMobile) {
        return (
            <>
                <TableContainer >
                    <Table variant='striped' colorScheme='orange'>
                        <TableCaption>Duração de sono</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Data</Th>
                                <Th>Deitar</Th>
                                <Th>Acordar</Th>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                arrayData.map(column => (
                                    <Tr>
                                        <Td>{column.date}</Td>
                                        <Td>{column.sleepHour}</Td>
                                        <Td>{column.wakeUpHour}</Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </>
        )

    } else {
        return (
            <TableContainer >
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
                            arrayData.map(data => (
                                <Tr>
                                    <Td>{data.date}</Td>
                                    <Td>{data.sleepHour}</Td>
                                    <Td>{data.wakeUpHour}</Td>
                                    <Td>{data.hour}</Td>
                                    <Button colorScheme='orange' mt={2} onClick={() => deleteData(data._id)}><TiDeleteOutline/></Button>
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