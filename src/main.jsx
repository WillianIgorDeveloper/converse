import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './Router'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { SupabaseProvider } from './contexts/SupabaseContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <SupabaseProvider>
        <Router />
      </SupabaseProvider>
    </ThemeProvider>
  </React.StrictMode>
)