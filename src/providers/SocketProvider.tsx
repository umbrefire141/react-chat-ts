import { ReactNode } from 'react';
import { io } from 'socket.io-client';
import { SocketContext } from '../context/SocketContext';

// Socket provider
const SocketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const user_id = localStorage.getItem('user_id');

	const socketUrl = import.meta.env.VITE_SOCKET_API_URL;
	const socket = io(`${socketUrl}`, {
		query: { user_id },
		withCredentials: true,
	});

	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	);
};

export default SocketProvider;
