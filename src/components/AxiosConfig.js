import axios from 'axios'

// const instance = axios.create({
//     baseURL: 'https://storytelling-back-end.herokuapp.com/api',
//     timeout: 10000,
//     params: {}, // do not remove this, its added to add params later in the config
//     headers:{Authorization:localStorage.getItem('token')}
// });


// instance.interceptors.request.use(axiosConfig => {
//     const token = localStorage.getItem('token')
    
//     axiosConfig.headers.Authorization = token
//     return axiosConfig.headers.Authorization
// })

// instance.interceptors.response.use(axiosResponse => {
//     if(axiosResponse.data.token) {
//         localStorage.setItem('token', axiosResponse.data.token)
//     }

//     return axiosResponse
// })

const instance = () => {
    console.log('axios config')
    return {headers: {authorization: localStorage.getItem('token')}}
}

export default instance