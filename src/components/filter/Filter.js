import React, { useState } from 'react'
import {
    Box, Button, Select
} from '@chakra-ui/react'
import { useForm, FormProvider } from 'react-hook-form'
import InputFloating from '../InputFloating'
import { useContext } from 'react'
import { SleepContext } from '../../context/Context'
import { IoLogoWindows } from 'react-icons/io'

const Filter = () => {
    const [option, setOption] = useState('')
    const [secondOp, setSecondOp] = useState('')

    const { updateChart, user, table } = useContext(SleepContext)

    const onSubmit = (data) => {

        let query = ''

        if (data.valueData && data.valueNumber && option !== 'eq' && secondOp !== 'eq') query = `?date[${option}]=${data.valueData}&hour[${secondOp}]=${data.valueNumber}`
        if (data.valueData && !data.valueNumber && option !== 'eq') query = `?date[${option}]=${data.valueData}`
        if (!data.valueData && data.valueNumber && secondOp !== 'eq') query = `?hour[${secondOp}]=${data.valueNumber}`
        if (option === 'eq' && (!data.valueNumber || data.valueNumber === 0)) query = `?date=${data.valueData}`
        if (secondOp === 'eq' && !data.valueData) query = `?hour=${data.valueNumber}`
        if (secondOp === 'eq' && option === 'eq') query = `?date=${data.valueData}&hour=${data.valueNumber}`

        updateChart(query)
        console.log('query', query)
        console.log('tabela', table)
    }

    

    const { handleSubmit, register, control, reset } = useForm()
    const methods = useForm()

    const resetar = () => {
       window.location.reload()
    }

  

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Box>
                    <Select>
                        <option value='maior que'>Selecione um seletor</option>
                        <option value='maior que' onClick={() => setOption('gt')}>maior que</option>
                        <option value='menor que' onClick={() => setOption('lt')}>menor que</option>
                        <option value='igual' onClick={() => setOption('eq')}>igual</option>
                    </Select>
                    <Box>
                        <InputFloating label='Data' name='valueData' type='date' defaultValue='' />
                    </Box>
                    <Box>

                    </Box>
                    <Box>
                        <Select>
                            <option value='maior que'>Selecione um seletor</option>
                            <option value='maior que' onClick={() => setSecondOp('gt')}>maior que</option>
                            <option value='menor que' onClick={() => setSecondOp('lt')}>menor que</option>
                            <option value='igual' onClick={() => setSecondOp('eq')}>igual</option>
                        </Select>
                    </Box>
                    <Box>
                        <InputFloating label='Horas dormidas' name='valueNumber' type='number' defaultValue='' />
                    </Box>

                    <Button type='submit'>Pesquisar</Button>
                    <Button onClick={() => resetar()}>Resetar</Button>
                    <Button onClick={() => updateChart('')}>Mostrar ultimos sete dias</Button>
                </Box>
            </form>
        </FormProvider>
    )
}

export default Filter