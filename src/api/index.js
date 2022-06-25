import axios from 'axios'

// API.interceptors.request.use((req) => {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//     return req
// })

const baseURL = 'https://sleep-project01.herokuapp.com' 
const api = axios.create({baseURL})

export const createSleep = (newSleep) => api.post('/sleep', newSleep)
export const getSleep = (queryString) => api.get(`/sleep${queryString}`)

export const signIn = (formData) => api.post('/user/signin', formData)

export const signUp = (formData) => api.post('/user/signup', formData)

