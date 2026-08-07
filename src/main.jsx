import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { DesignProvider } from './context/DesignContext.jsx'
import { FontProvider } from './context/FontContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <FontProvider>
          <DesignProvider>
            <App />
          </DesignProvider>
        </FontProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
