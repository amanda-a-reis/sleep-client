import React from 'react'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

const Home = () => {

    const history = useHistory()

    return (
        <Box w='100vw' h='100vh' bg='orange' display='flex' alignItems='center' justifyContent='center'>
            <Box width='50vw' display='flex' alignItems='center' >
                <Box>
                    <Image src='./sleep1.png' alt='Img 1' />
                    <Image src='./sleep2.png' alt='Img 1' />
                    <Image src='./sleep4.png' alt='Img 1' />
                    <Image src='./sleep3.png' alt='Img 1' />
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' ml={100}>
                    <Text  fontWeight={500}  color='white' fontSize='36px' textAlign='center'>Dê mais qualidade para seu sono</Text>
                    <Text fontWeight={800}  color='white' fontSize='48px'>MONITOR DE SONO</Text>
                    <Image src='./graphic.png' mt={10}/>
                    <Button mt={10} onClick={() => history.push('/login')}>Experimentar</Button>
                </Box>
            </Box>
            <Box w='25vw'>
                <Image src='./2346847.png' alt='vetor de homem dormindo' />
                <Text fontSize='24px' mt={10} color='white' textAlign='center'>Ao monitorar seu sono você pode verificar os dias que dormiu mal, e relacionar com os acontecimentos do dia</Text>
            </Box>
        </Box>
    )
}

export default Home