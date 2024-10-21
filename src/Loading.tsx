import { useEffect } from 'react'
import logoGov from './assets/governoSP.png'
import { useNavigate } from 'react-router-dom';

export function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 3000);
  }, [])
  
  return (
    <div className='background-linear'>
      <img src={logoGov} alt="Logo Governo do Estado São Paulo" />
      {/* <i style={{fontSize: '24px', color: 'white'}} className="fa-solid fa-spinner animation-spin"></i> */}
    </div>
  )
}
