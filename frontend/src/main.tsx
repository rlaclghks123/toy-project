import ReactDOM from 'react-dom/client';
import App from './App.tsx';

if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser.js');
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
