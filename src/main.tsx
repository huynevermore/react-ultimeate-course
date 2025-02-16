import { createRoot } from 'react-dom/client'
import './styles/index.css';
import './styles/button.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
