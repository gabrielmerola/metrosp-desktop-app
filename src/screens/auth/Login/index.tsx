import "./login.css";
import { Link } from "react-router-dom";
import logoGov from '../../../assets/governoSP.png'

export function Login() {
    return (
        <main className="backgroundLogin">
            <section className="backgroundBlue">
                <div className="left">
                    <img src={logoGov} alt="Logo Governo do Estado São Paulo" />
                    <h1>ssss</h1>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <Link to={'/'}>home</Link>
                </div>
            </section>
        </main>
    )
}