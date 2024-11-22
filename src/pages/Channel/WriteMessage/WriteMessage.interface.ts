import { Socket } from 'socket.io-client';

export interface IWriteMessageProps {
	chat_id: number;
	socket: Socket;
}
