// 封装api
import axios from "axios"
let instance = axios.create({
    baseURL: "/api",
    timeout: 2000,
})
export default instance