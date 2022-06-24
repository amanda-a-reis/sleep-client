import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './components/login/Login'
import App from './App'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Home from './components/home/Home'

const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)"
};

export const theme = extendTheme({
    components: {
        Form: {
            variants: {
                floating: {
                    container: {
                        _focusWithin: {
                            label: {
                                ...activeLabelStyles
                            }
                        },
                        label: {
                            transform: "scale(0.85) translateY(-24px)",
                            top: 0,
                            left: 0,
                            zIndex: 2,
                            position: "absolute",
                            backgroundColor: "white",
                            pointerEvents: "none",
                            mx: 3,
                            px: 1,
                            my: 2,
                            transformOrigin: "left top"
                        }
                    }
                }
            },
            mobile: {
                display: 'flex',
                flexDirection: 'column',
                width: '100vw'
            }
        }
    }
});

const Routes = () => {
    return (
        <ChakraProvider theme={theme}>
                <BrowserRouter>
                    <Switch>
                    <Route path='/' exact component={Home} />
                        <Route path='/menu' exact component={App} />
                        <Route path='/login' exact component={Login} />
                    </Switch>
                </BrowserRouter>
        </ChakraProvider>
    )
}

export default Routes