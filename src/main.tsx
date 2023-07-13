
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Registro from './components/registro/Registro.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="registrar" element={<Registro/>} />
  </Routes>
</BrowserRouter>
)
