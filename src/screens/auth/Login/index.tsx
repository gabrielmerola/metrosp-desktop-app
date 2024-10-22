import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoGov from '../../../assets/governoSP.png'
import metroLogo from '../../../assets/metroLogo.png'
import { AuthRepository } from "../../../api/repositories/auth_repository_http";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from "jwt-decode";

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [viewPass, setViewPass] = useState(false);
    const navigate = useNavigate();
    const AuthRepo = new AuthRepository();

    async function onSubmit() {
        setLoading(true)
        if(!email || !password){
            toast.warn("Preencha todos os campos", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setLoading(false)
            return
        }
        if(!email.match("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$") || !password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_\\-+=\\[{\\]};:'\",<.>/?]).{8,}$")){
            toast.error("Email ou Senha Inválido", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setLoading(false)
            return
        }
        const response = await AuthRepo.login(email, password)
        // console.log(response.status === 401)
        if(response.status === 401) {
            toast.error("Email ou Senha Inválidos", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setLoading(false)
            return
        }
        if(response.status === 200){
            const token = localStorage.getItem('token')
            if(!token) return
            const user: {user_id: string, exp: number} = jwtDecode(token)
            if(user.user_id.includes("@")){
                navigate("/confirmCode")
            }

            const response = await AuthRepo.me()
            
            setLoading(false)
        } else {
            toast.error("Erro ao logar", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setLoading(false)
        }
    }
    
    return (
        <main className="backgroundLogin">
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
            <section className="backgroundBlue">
                <div className="left">
                    <img src={logoGov} alt="Logo Governo do Estado São Paulo" />
                    <div>
                        <h1>Sistema de Monitoramento do Metrô de SP</h1>
                    </div>
                </div>
                <div className="right">
                    <div>
                        <img width={60} src={metroLogo} alt="Logo MetroSP" />
                    </div>
                    <div className="formLogin">
                        <h1>Login</h1>
                        <form style={{height: '100%', display: "flex", flexDirection: 'column', justifyContent: "center", gap: 12}}>
                            <div className="inputForm">
                                <label htmlFor="emailID">Usuário</label>
                                <input id="emailID" onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Digite o seu Email ou ID" />
                            </div>
                            <div className="inputForm">
                                <label htmlFor="pass">Senha</label>
                                <div style={{display: "flex", justifyContent: 'space-between'}}>
                                    <input style={{width: '90%'}} id='pass' onChange={(e) => setPassword(e.target.value)} type={viewPass ? "text" :"password"} placeholder="Digite a sua Senha" />
                                    {viewPass ?
                                        <i style={{cursor:'pointer'}} onClick={()=>setViewPass(!viewPass)} className="fa-solid fa-eye"></i>
                                        :
                                        <i style={{cursor:'pointer'}} onClick={()=>setViewPass(!viewPass)} className="fa-solid fa-eye-slash"></i>
                                    }
                                </div>
                                <span style={{fontSize: 12}}>Esqueceu sua senha? <Link to={'/'} style={{textDecoration: "underline", color: 'black'}}>Clique aqui!</Link></span>
                            </div>
                            <div className="buttonForm">
                                <button type="button" onClick={onSubmit}>{loading ? <i className="fa-solid fa-spinner animation-spin"></i> : "Entrar"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}