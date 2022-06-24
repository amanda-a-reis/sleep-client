import React from 'react'
import { Box, Button, Image, Text, useMediaQuery } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const [mediaQuerieMobile] = useMediaQuery('(max-width: 900px)')
    const history = useHistory()

    return (
        <Box w='100vw' h={mediaQuerieMobile ? 'auto' : '100vh'} bg='orange' display='flex' alignItems='center' justifyContent='center' flexDirection={mediaQuerieMobile ? 'column' : 'row'}>
            <Box width='50vw' display='flex' alignItems='center' flexDirection={mediaQuerieMobile ? 'column-reverse' : 'row'} >
                <Box>
                    <Image src='./sleep1.png' alt='Img 1' />
                    <Image src='./sleep2.png' alt='Img 1' />
                    <Image src='./sleep4.png' alt='Img 1' />
                    <Image src='./sleep3.png' alt='Img 1' />
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' ml={mediaQuerieMobile ? '0' : '100px'}>
                    <Text  fontWeight={500}  color='white' fontSize='36px' textAlign='center'>Dê mais qualidade para seu sono</Text>
                    <Text fontWeight={800}  color='white' fontSize='48px' textAlign={mediaQuerieMobile ? 'center' : 'inherit'}>MONITOR DE SONO</Text>
                    <Image src='./graphic.png' mt={10}/>
                    <Button mt={10} onClick={() => history.push('/login')} w={mediaQuerieMobile ? '200px' : 'ihnerit'} mb={30}>Experimentar</Button>
                </Box>
            </Box>
            <Box w={mediaQuerieMobile ? '70vw' : '25vw'}>
                <Image src='./2346847.png' alt='vetor de homem dormindo' display={mediaQuerieMobile ? 'none' : 'block'}/>
                <Text fontSize='24px' mt={10} color='white' textAlign='center'>Ao monitorar seu sono você pode verificar os dias que dormiu mal, e relacionar com os acontecimentos do dia</Text>
            </Box>
        </Box>
    )
}

export default Home