import axios from 'axios'

// API.interceptors.request.use((req) => {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//     return req
// })

const token = JSON.parse(localStorage.getItem('token'))
const baseURL = 'https://sleep-project01.herokuapp.com' 
const api = axios.create({baseURL})

let config = {
    headers: {
        Authorization: 'Bearer ' + token
    }
}

console.log(token)

export const createSleep = (newSleep) => api.post('/sleep', newSleep, config)

export const getSleep = (queryString) => api.get(`/sleep${queryString}`, config)

export const signIn = (formData) => api.post('/user/signin', {data: formData})

export const signUp = (formData) => api.post('/user/signup', {data: formData})

export const deleteSleep = (id) => api.delete(`/sleep/${id}`, config)

export const deleteUser = (id) => api.delete(`/user/signin/${id}`, config )

export const forgotPassword = (email) => api.post('/user/forgotPassword', {email: email})

export const resetPassword = (token, data) => api.patch(`user/resetPassword/${token}`, {passwordConfirm: data.passwordConfirm, password: data.password})

