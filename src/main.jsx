import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Reshaped } from 'reshaped'
import 'reshaped/themes/reshaped/theme.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Reshaped>
      <App />
    </Reshaped>
  </StrictMode>,
)
