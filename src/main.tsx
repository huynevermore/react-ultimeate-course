import { createRoot } from 'react-dom/client'
import './styles/index.css';
import './styles/button.css';
import App from './App.tsx'
import { AppProvider } from './context/AppContext.tsx';
import { Provider } from 'react-redux';
import { store } from './store.ts';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>
  // </StrictMode>,
)
