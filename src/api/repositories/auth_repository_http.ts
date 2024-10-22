import { httpAuth } from "../http"

export class AuthRepository {
    
    async login(email: string, password: string) {
        try {
            const response = await httpAuth.post('/login', {
                username: email,
                password: password
            })
            alert(response.data.token)
            return response.data
        } catch(error: any) {
            return error
        }
    }
}