import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Avatar, Text, Input, Button} from '@chakra-ui/react'
import InputFloating from '../InputFloating'
import { useForm, FormProvider } from 'react-hook-form'
import {FaKey} from 'react-icons/fa'
import { signIn, signUp } from '../../api'
import { SleepContext } from '../../context/Context'
import { useCookies } from 'react-cookie'


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}

const Login = () => {
    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState(initialState)
    const [showPassoword, setShowPassword] = useState(false)
    const history = useHistory()
    const {user, setUser} = useContext(SleepContext)
    const [cookies, setCookies] = useCookies()

    const onSubmit = async (data) => {
        try {
            if(isSignup) {
                const {login} = await signUp({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    password: data.password,
                    confirmPassword: data.confirmPassword
                })
                setIsSignup(false)
            } else {
                const newData = {email: data.email, password: data.password}
                const login = await signIn(newData)
                console.log(login)
                localStorage.setItem('profile', JSON.stringify(login.data.email))
                localStorage.setItem('name', JSON.stringify(login.data.name))
                localStorage.setItem('id', JSON.stringify(login.data.id))
                localStorage.setItem('token', JSON.stringify(login.data.token))
                history.push('/menu')
                window.location.reload()
            }
        } catch (error) {
            alert(error)
        }
        
    }


    


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
            <Box display='flex' flexDirection='column' alignItems='center' bg='white' height={isSignup ? '600' : '480px'} p={50} borderRadius='12px'>
                <Avatar icon={<FaKey fontSize='1.5rem' color='white'/>} bg='orange'/>
                <Text variant='h5' mt={5} mb={5}>{isSignup ? 'Sign Up' : 'Sign In'}</Text>
                <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <Box>
                        {
                            isSignup && (
                                <>
                                    <InputFloating name='firstName' label="Nome" defaultValue="" handleChange={handleChange} />
                                    <InputFloating name='lastName' label="Sobrenome" defaultValue="" handleChange={handleChange}/>
                                </>
                            )
                        }
                        <InputFloating name='email' label='Email' defaultValue="" handleChange={handleChange} type='email' />
                        <InputFloating name='password' label='Senha' defaultValue="" handleChange={handleChange} type={showPassoword ? 'text' : 'password'} showPassoword={showPassoword} setShowPassword={setShowPassword} eye='eye'/>
                        {
                            isSignup && <InputFloating name="confirmPassword" label="Confirmar senha" defaultValue="" handleChange={handleChange} type="password" />
                        }
                    </Box>
                    <Box  display='flex' flexDirection='column' alignItems='center'>
                    <Button type="submit" mb={5} bg='orange'>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                        <Box>
                            <Button onClick={switchMode} bg='orange'>{
                                isSignup ? 'J?? tem uma conta? Sign In' : "N??o tem uma conta? Sign up"
                            }</Button>
                        </Box>
                   {
                    !isSignup && <Button mt={5} colorScheme='red' onClick={() => history.push('/reset')}>Esqueci minha senha</Button>
                   } 
                    </Box>
                </form>
                </FormProvider>
            </Box>
        </Box>
    )
}

export default Login