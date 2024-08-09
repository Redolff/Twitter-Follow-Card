import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { LoginProvider } from './context/LoginProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <LoginProvider>
        <App />
    </LoginProvider>
)
