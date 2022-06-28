import React, { useState, useEffect, useContext } from 'react'
import {
    Box,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import InputFloating from '../InputFloating'
import { useForm, FormProvider } from "react-hook-form";
import { createSleep } from '../../api';
import { SleepContext } from '../../context/Context';


const Form = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const date = new Date().toISOString().split('T')[0]

    const { updateChart } = useContext(SleepContext)

    const onSubmit = async (data) => {
        try {
            const user = JSON.parse(localStorage.getItem('profile'))
            const dataUser = {
                user: user,
                date: data.date,
                sleepHour: data.sleepHour,
                wakeUpHour: data.wakeUpHour
            }
            const { newData } = await createSleep({data: dataUser})
            updateChart()
            window.location.reload()
            onClose()

            
        } catch (error) {
            console.log(error)
        }

    }

    const methods = useForm();
    return (
        <Box>
            <Button onClick={onOpen} mt={5} colorScheme='orange'>Cadastrar Sono</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Minha rotina de sono</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormProvider {...methods} >
                            <form onSubmit={methods.handleSubmit(onSubmit)}>
                                <Box display='flex' justifyContent='center' flexDirection='column'>
                                    <InputFloating label='Dia:' type='date' name='date' defaultValue={date} />
                                    <InputFloating label='Dormi às:' type='time' name='sleepHour' defaultValue='22:00' />
                                    <InputFloating label='Acordei às:' type='time' name='wakeUpHour' defaultValue='07:00' />
                                    <Box display='flex' justifyContent='right'>
                                        <Button w='40%' ml={5} colorScheme='green' type='submit'>Cadastrar</Button>
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

export default Form