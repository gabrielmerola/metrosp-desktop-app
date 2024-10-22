import './confirmCode.css'
import govSP from '../../../assets/governoSP.png'
import metroLogo from '../../../assets/metroLogo.png'
import { useRef } from 'react';
import { AuthRepository } from '../../../api/repositories/auth_repository_http';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export function ConfirmCode() {
    const inputsRef = useRef<(HTMLInputElement)[]>([]);
    const AuthRepo = new AuthRepository()
    const navigate = useNavigate()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (e.target.value.length > 1) {
            e.target.value = e.target.value.slice(0, 1);
        }
        if (e.target.value && index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1].focus();
        }
    };

    async function sendCode() {
        const code = inputsRef.current.map(input => input.value)
        if(code.length == 0){
            toast.error("Código de Verificação Inválido", {
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
        const response = await AuthRepo.confirmEmail(code.join(''))
        if(response.status == 200){
            toast.success("Email verificado com sucesso!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            
            const response = await AuthRepo.me()
            console.log(response)
        }else {
            toast.error("Erro ao verificar código", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    async function resendEmail() {
        const response = await AuthRepo.verifyEmail()
        if(response.status == 200){
            toast.success("Código enviado para o email", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            toast.error("Erro ao enviar email", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <main style={{padding:12, height: '100vh'}}>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
            <div style={{height:'10%'}}>
                <img style={{backgroundColor:'black', padding:8, borderRadius:12}} width={200} src={govSP} alt="" />
            </div>
            <section className='container'>
                <div className='containerCode'>
                    <img width={60} src={metroLogo} alt="" />
                    <p style={{textAlign: 'center', width:'50%'}}>Eviamos um código de verificação para exemploemail@gmail.com Por favor confira seu email e o spam, após isso confirme o código no campo a baixo.</p>
                    <div className='confirmCode'>
                    {[...Array(6)].map((_, index) => (
                        <input
                            key={index}
                            type="number"
                            maxLength={1}
                            ref={(el: HTMLInputElement) => (inputsRef.current[index] = el)}
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, index)}
                            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                                if (e.key === 'Backspace' && index > 0 && !e.currentTarget.value) {
                                    inputsRef.current[index - 1]?.focus();
                                }
                            }}
                        />
                    ))}
                    </div>
                    <button className='button' onClick={sendCode} type='button'>Confirmar Código</button>
                    <div style={{width:'90%', height:1, backgroundColor:'black'}} />
                    <p style={{fontSize:14}}>Caso não tenha recebido o email: <span onClick={resendEmail} style={{textDecoration:'underline', cursor:'pointer'}}>Reenviar Email</span></p>
                </div>
            </section>
        </main>
    )
}