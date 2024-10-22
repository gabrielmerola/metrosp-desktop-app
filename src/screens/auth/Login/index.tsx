import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoGov from '../../../assets/governoSP.png'
import metroLogo from '../../../assets/metroLogo.png'
import { AuthRepository } from "../../../api/repositories/auth_repository_http";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const AuthRepo = new AuthRepository();

    async function onSubmit() {
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
            return
        }
        const response = await AuthRepo.login(email, password)
        console.log(response.status === 401)
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
            return
        }
        if(response.status === 200){
            const response = await AuthRepo.me()
            // console.log(response.data.user.user_type)
            if(response.status === 200) {
                toast.success("Bem-vindo!!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                if(response.data.user.user_type == "station"){
                    setTimeout(() => {
                        navigate('/station/dashboard')
                    }, 3000);
                } else {
                    setTimeout(() => {
                        navigate('/central/dashboard')
                    }, 3000);
                }
            }
        }
    }
    return (
        <main className="backgroundLogin">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
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
                                <input id='pass' onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Digite a sua Senha" />
                                <span style={{fontSize: 12}}>Esqueceu sua senha? <Link to={'/'} style={{textDecoration: "underline", color: 'black'}}>Clique aqui!</Link></span>
                            </div>
                            <div className="buttonForm">
                                <button type="button" onClick={onSubmit}>Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}