import { createRoot } from 'react-dom/client'
import './styles/index.css';
import './styles/button.css';
import App from './App.tsx'
import { AppProvider } from './context/AppContext.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <AppProvider>
      <App />
  </AppProvider>
  // </StrictMode>,
)
