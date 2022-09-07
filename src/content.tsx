import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const html = document.querySelector('html')
const app = document.createElement('div')

app.attachShadow({mode: 'open'})
app.id = 'app-root'

if (html) {
  html.append(app)
}

ReactDOM.createRoot(app.shadowRoot as unknown as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
