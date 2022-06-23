import React from 'react'
import { Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

const Logout = () => {
    const user = JSON.parse(localStorage.getItem('profile'))
    const history = useHistory()

    return (
        <Button mt={1} mr={10} onClick={() => {
            localStorage.clear(); history.push('/login')

        }} >{user ? 'Logout' : 'Login'}</Button>
    )
}

export default Logout