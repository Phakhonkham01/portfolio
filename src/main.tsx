import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { CardWorld }  from './components/Card/CardWorld'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    {/* <CardWorld /> */}
    <App />
    
  </StrictMode>
)
