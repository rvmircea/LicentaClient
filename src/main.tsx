import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0ProviderWithConfig } from './auth/auth0-provider-with-config'
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0ProviderWithConfig>
      <App />
    </Auth0ProviderWithConfig>
  </React.StrictMode>
)
