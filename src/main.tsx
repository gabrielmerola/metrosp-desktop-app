import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Loading } from './Loading.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './screens/auth/Login/index.tsx'
import { CentralDasboard } from './screens/central/home/index.tsx'
import { StationDasboard } from './screens/station/home/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loading />}/>
        <Route path='/login' element={<Login />}/>
        {/* ROTAS CENTRAL */}
        <Route path='/central/dashboard' element={<CentralDasboard />}/>
        {/* ROTAS ESTAÇÃO */}
        <Route path='/station/dashboard' element={<StationDasboard />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
