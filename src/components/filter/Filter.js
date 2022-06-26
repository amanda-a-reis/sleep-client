import React, { useState } from 'react'
import {
    Box, Button, Select, useMediaQuery,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
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
    const [mediaQuerieMobile] = useMediaQuery('(max-width: 560px)')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onSubmit = (data) => {

        let query = ''

        if (data.valueData && data.valueNumber) {
            if (option !== 'eq' && secondOp !== 'eq') query = `?date[${option}]=${data.valueData}&hour[${secondOp}]=${data.valueNumber}`
            if (secondOp === 'eq' && option === 'eq') query = `?date=${data.valueData}&hour=${data.valueNumber}`
            if (secondOp === 'eq' && option !== 'eq') query = `?date[${option}]=${data.valueData}&hour=${data.valueNumber}`
            if (secondOp !== 'eq' && option === 'eq') query = `?date=${data.valueData}&hour[${secondOp}]=${data.valueNumber}`
        }
        if (data.valueData && !data.valueNumber) {
            if (option !== 'eq') query = `?date[${option}]=${data.valueData}`
            if (option === 'eq') query = `?date=${data.valueData}`
        }
        if (!data.valueData && data.valueNumber) {
            if (secondOp !== 'eq') query = `?hour[${secondOp}]=${data.valueNumber}`
            if (secondOp === 'eq') query = `?hour=${data.valueNumber}`

        }
        updateChart(query)
        onClose()
    }



    const { handleSubmit, register, control, reset } = useForm()
    const methods = useForm()

    const resetar = () => {
        window.location.reload()
        onClose()
    }



    return (
        <Box display='flex' justifyContent='center'>
            <Button onClick={onOpen} mt={5} colorScheme='orange'>Filtrar sono</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Minha rotina de sono</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormProvider {...methods}>
                            <form onSubmit={methods.handleSubmit(onSubmit)}>
                                <Box>
                                    <Select onChange={(e) => setOption(e.target.value)} mb={5}>
                                        <option value=''>Selecione um seletor</option>
                                        <option value='gt' >maior que</option>
                                        <option value='lt' >menor que</option>
                                        <option value='eq' >igual</option>
                                    </Select>
                                    <Box>
                                        <InputFloating label='Data' name='valueData' type='date' defaultValue='' />
                                    </Box>
                                    <Box>

                                    </Box>
                                    <Box>
                                        <Select onChange={(e) => setSecondOp(e.target.value)} mb={5}>
                                            <option value=''>Selecione um seletor</option>
                                            <option value='gt' >maior que</option>
                                            <option value='lt' >menor que</option>
                                            <option value='eq' >igual</option>
                                        </Select>
                                    </Box>
                                    <Box>
                                        <InputFloating label='Horas dormidas' name='valueNumber' type='number' defaultValue='' />
                                    </Box>
                                    <Box display='flex' flexDirection={mediaQuerieMobile ? 'column' : 'row'} w={mediaQuerieMobile ? '100vw' : '400px'}>
                                        <Button type='submit' colorScheme='orange' mb={5} mr={5}>Pesquisar</Button>
                                        <Button onClick={() => resetar()} colorScheme='orange' mb={5} mr={5}>Resetar</Button>
                                        <Button onClick={() => {updateChart(''); onClose()}} colorScheme='orange' mb={5}>Mostrar ultimos sete dias</Button>
                                    </Box>
                                </Box>
                            </form>
                        </FormProvider>
                    </ModalBody>

                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>

    )
}

export default Filter