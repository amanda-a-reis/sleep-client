import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import { useForm, FormProvider } from "react-hook-form";
import InputFloating from '../InputFloating';
import { forgotPassword } from '../../api';
import { useHistory } from 'react-router-dom';

const Reset = () => {
    const history = useHistory()

    const onSubmit = async (data) => {
        await forgotPassword(data.email)
        history.push('/login')
    }

    const methods = useForm();
    const { handleSubmit } = useForm()

    return (
        <Box bg='orange' w='100vw' h='100vh' display='flex' justifyContent='center' alignItems='center'>
            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' bg='white' h={450} w={450} p={50} borderRadius='12px'>
                <Text mb={35} fontSize={24}>Informe o email abaixo</Text>
                <Text mb={35} textAlign='center'>Você receberá as instruções para resetar sua senha no seu email</Text>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <InputFloating label='Email' name='email' type='text' />
                        <Button type='submit' colorScheme='orange'>Enviar</Button>
                    </form>
                </FormProvider>
            </Box>
        </Box>
    )
}

export default Reset