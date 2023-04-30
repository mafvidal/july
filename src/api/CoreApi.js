import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const coreApi = axios.create({
    baseURL: "https://julifapi-production.up.railway.app/api"
})
