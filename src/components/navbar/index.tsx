import './navbar.css'
import logoMetroBranco from '../../assets/metroLogoBranco.png'
import { Link } from 'react-router-dom'

export function NavBar({ type }: {type: string}) {
    return (
        <nav className="navBar">
            <img width={40} src={logoMetroBranco} alt="Logo metroSP" />
            <div className='containerLink'>
                <Link className='link selected' to="/central/dashboard"><i className="fa-solid fa-house"></i> Início</Link>
                <Link className='link' to="/central/stations"><i className="fa-solid fa-train"></i> Estações <i className="fa-solid fa-chevron-down"></i> <i className="fa-solid fa-chevron-up"></i></Link>
                <Link className='link' to="/central/operators"><i className="fa-solid fa-user"></i> Operadores <i className="fa-solid fa-chevron-down"></i> <i className="fa-solid fa-chevron-up"></i></Link>
                <Link className='link' to="/central/data"><i className="fa-solid fa-chart-line"></i> Dados</Link>
                <Link className='link' to="/central/createCentralPerson"><i className="fa-solid fa-user-plus"></i> Criação {type == 'central' ? 'Perfil Central' : 'cidadão'}</Link>
                <Link className='link' to='/login'>Logout</Link>
            </div>
        </nav>
    )
}