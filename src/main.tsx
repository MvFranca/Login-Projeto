
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Registro from './components/registro/Registro.tsx'
import LoginMobile from './components/login/LoginMobile.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/registrar" element={<Registro/>}/>
    <Route path="/entrar" element={<LoginMobile/>} />
  </Routes>
</BrowserRouter>
)
