export class Env {
    AUTH_ENDPOINT: string;
    METRO_ENDPOINT: string;

    constructor() {
        this.AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT
        this.METRO_ENDPOINT = import.meta.env.VITE_METRO_ENDPOINT
    }
}