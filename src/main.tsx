import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="servicios" element={<Navigate to="/#servicios" replace />} />
        <Route path="horarios" element={<Navigate to="/#horarios" replace />} />
        <Route path="ubicacion" element={<Navigate to="/#ubicacion" replace />} />
        <Route path="contacto" element={<Navigate to="/#contacto" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
