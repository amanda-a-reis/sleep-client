import React, {useContext} from 'react'
import {
    Box, 
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { deleteUser, deleteSleep } from '../../api'
import { useHistory } from 'react-router-dom'
import { SleepContext } from '../../context/Context'

const Configuracao = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { arrayData } = useContext(SleepContext)
    const id = JSON.parse(localStorage.getItem('id'))
    const history = useHistory()

    const deleteUserById = async () => {
       await deleteUser(id)
       await arrayData.map(data => deleteSleep(data._id))
        history.push('/login')
    }

    return (
        <Box>
            <Button onClick={onOpen}>Configuração</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Configurações</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Button onClick={() => deleteUserById()}>Deletar conta</Button>
                    </ModalBody>

                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default Configuracao