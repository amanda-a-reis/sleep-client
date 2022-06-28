import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import { useForm, FormProvider } from "react-hook-form";
import InputFloating from '../InputFloating';
import { resetPassword } from '../../api';
import { useHistory, useParams } from 'react-router-dom';

const Restore = () => {
    const token = useParams()
    const history = useHistory()

    const onSubmit = async (data) => {
        try {
            await resetPassword(token.id, data)
            history.push('/login')
        } catch (error) {
            alert('As senhas não são iguais ou seu token expirou')
        }

    }

    const methods = useForm();
    const { handleSubmit } = useForm()

    return (
        <Box bg='orange' w='100vw' h='100vh' display='flex' justifyContent='center' alignItems='center'>
            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' bg='white' h={450} w={450} p={50} borderRadius='12px'>
                <Text mb={35} fontSize={24}>Informe sua nova senha</Text>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <Box display='flex' flexDirection='column'>
                            <InputFloating label='Senha' name='password' type='password' />
                            <InputFloating label='Confirmar senha' name='passwordConfirm' type='password' />
                            <Button type='submit' colorScheme='orange'>Enviar</Button>
                        </Box>
                    </form>
                </FormProvider>
            </Box>
        </Box>
    )
}

export default Restore