import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Avatar, Text, Input, Button } from '@chakra-ui/react'
import InputFloating from '../InputFloating'
import { useForm, FormProvider } from 'react-hook-form'
import {FaKey} from 'react-icons/fa'
import { signIn, signUp } from '../../api'
import { SleepContext } from '../../context/Context'

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Login = () => {
    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const [showPassoword, setShowPassword] = useState(false)
    const history = useHistory()
    const {user, setUser} = useContext(SleepContext)

    const onSubmit = async (data) => {
        console.log(data)
        try {
            if(isSignup) {
                const {login} = await signUp(data)
                history.push('/login')
            } else {
                const newData = {email: data.email, password: data.password}
                const {login} = await signIn(newData)
                localStorage.setItem('profile', JSON.stringify(data.email))
                history.push('/menu')
            }
        } catch (error) {
            alert(error)
        }
        
    }


    const handleShowPassword = () => setShowPassword((prevShowPassowrd) => !prevShowPassowrd)


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const switchMode = () => {
        setIsSignup((prevIsSignUp) => !prevIsSignUp)
        setShowPassword(false)
    }

    const methods = useForm()

    return (
        <Box display='flex' justifyContent="center"  height='100vh' pt={200} bg='orange'>
            <Box display='flex' flexDirection='column' alignItems='center' bg='white' height={isSignup ? '65vh' : '45vh'} p={50} borderRadius='12px'>
                <Avatar icon={<FaKey fontSize='1.5rem' color='white'/>} bg='orange'/>
                <Text variant='h5' mt={5} mb={5}>{isSignup ? 'Sign Up' : 'Sign In'}</Text>
                <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <Box>
                        {
                            isSignup && (
                                <>
                                    <InputFloating name='firstName' label="First Name" defaultValue="" handleChange={handleChange} />
                                    <InputFloating name='lastName' label="Last Name" defaultValue="" handleChange={handleChange}/>
                                </>
                            )
                        }
                        <InputFloating name='email' label='Email Address' defaultValue="" handleChange={handleChange} type='email' />
                        <InputFloating name='password' label='Password' defaultValue="" handleChange={handleChange} type={showPassoword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {
                            isSignup && <InputFloating name="confirmPassword" label="Repeat Password" defaultValue="" handleChange={handleChange} type="password" />
                        }
                    </Box>
                    <Box  display='flex' flexDirection='column' alignItems='center'>
                    <Button type="submit" mb={5} bg='orange'>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                        <Box>
                            <Button onClick={switchMode} bg='orange'>{
                                isSignup ? 'Já tem uma conta? Sign In' : "Não tem uma conta? Sign up"
                            }</Button>
                        </Box>
                    </Box>
                </form>
                </FormProvider>
            </Box>
        </Box>
    )
}

export default Login