import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Apps from './fromvalidation.jsx'
import Form from './Form.jsx'
import UseAPi from './useApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseAPi />
    <br /><hr />
    <App />
    <br /><hr />
    <Apps />
    <br /><hr />
    <Form />
  </StrictMode>,
)
