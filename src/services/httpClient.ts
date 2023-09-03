import axios from "axios";

const BASE_URL = "https://filmnet.ir/api-v2/";
const httpClient = axios.create({
    baseURL: BASE_URL,
})

httpClient.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        const res = error?.response
        if (res.status === 401 || res.status === 403) {
            return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)

export default httpClient;
