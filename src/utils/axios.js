import axios from 'axios'

const token = localStorage.getItem("@@remember-rootState") ? JSON.parse(localStorage.getItem("@@remember-rootState"))?.auth?.token : "";
console.log(token)

const instance = axios.create({
    baseURL: 'http://localhost:2020',
    headers: {
        "authorization": `${token ? token : ''}`
    }
});

export default instance