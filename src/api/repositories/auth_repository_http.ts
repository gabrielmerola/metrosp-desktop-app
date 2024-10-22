import { httpAuth } from "../http"

export class AuthRepository {
    
    async login(email: string, password: string) {
        try {
            const response = await httpAuth.post('/login', {
                username: email,
                password: password
            })
            localStorage.setItem('token', response.data.token)
            // alert(response.data.token)
            return response.data
        } catch(error: any) {
            throw error
        }
    }

    async me() {
        try {
            const response = await httpAuth.get('/me', {
                headers: {
                    Authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
            alert(response.data)
            return response.data
        } catch(error: any) {
            throw error
        }
    }
}