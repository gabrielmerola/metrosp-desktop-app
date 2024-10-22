import axios from "axios";
import { Env } from "../env";

const ENV = new Env();

export const httpAuth = axios.create({
    baseURL: ENV.AUTH_ENDPOINT
})

export const httpMetro = axios.create({
    baseURL: ENV.METRO_ENDPOINT
})