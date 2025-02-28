import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './reset.css'
import { BrowserRouter } from 'react-router'

// Проверяем, есть ли в URL параметр "redirect"
const params = new URLSearchParams(window.location.search);
const redirectPath = params.get("redirect");

if (redirectPath) {
    window.history.replaceState(null, "", redirectPath);
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
