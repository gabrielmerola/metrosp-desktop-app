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
            return response
        } catch(error: any) {
            return error
        }
    }

    async me() {
        try {
            const response = await httpAuth.get('/me', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            // console.log(response.data)
            return response
        } catch(error: any) {
            throw error
        }
    }
}