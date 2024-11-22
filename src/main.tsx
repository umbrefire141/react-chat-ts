import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import SocketProvider from './providers/SocketProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<SocketProvider>
				<App />
			</SocketProvider>
		</BrowserRouter>
	</StrictMode>
);
