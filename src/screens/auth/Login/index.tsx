import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoGov from '../../../assets/governoSP.png'
import metroLogo from '../../../assets/metroLogo.png'

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onSubmit() {
        if(!email || !password) {
            alert('Preencha todos os campos')
            return
        }
        alert(`email: ${email}`)
        alert(`password: ${password}`)
    }
    return (
        <main className="backgroundLogin">
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
                                <button type="submit" onClick={onSubmit}>Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}