import { Box, Button, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSocket } from '../../hooks/useSocket';
import chatService from '../../services/chatService';
import { IChat, IMessage } from '../../types/Chat.interface';
import styles from './Channel.module.css';
import ListUsers from './ListUsers/ListUsers';
import Message from './Message/Message';
import WriteMessage from './WriteMessage/WriteMessage';

export default function ChannelPage() {
	// Get id from params
	const { id } = useParams();
	const [channel, setChannel] = useState<IChat | null>(null);
	const [messages, setMessages] = useState<IMessage[]>([]);

	// Using socket
	const socket = useSocket();

	// Get the channel
	const getChannel = async () => {
		if (!id) return null;
		const chat = await chatService.getChat(+id);
		setChannel(chat);
	};

	// Listener
	const messageListener = (message: IMessage) => {
		setMessages(prev => [...prev, message]);
	};

	useEffect(() => {
		if (socket && id) {
			socket.on('create_message', messageListener);
			socket.emit('get_messages', id, (data: IMessage[]) => {
				setMessages([...data]);
			});

			return () => {
				socket.removeListener('create_message');
				socket.removeListener('get_messages');
			};
		}
	}, [socket, id]);

	useEffect(() => {
		if (!channel) getChannel();
	}, []);

	return (
		<Container>
			<Button
				LinkComponent={Link}
				to="/"
				variant="contained"
				sx={{ mb: 3 }}
				fullWidth
			>
				Back
			</Button>
			<Box className={styles.chat}>
				<Box className={styles.wrapper}>
					<Box className={styles.info}>
						<img
							src="https://images.unsplash.com/photo-1619454016518-697bc231e7cb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							className={styles.avatar}
						/>
						<Typography variant="h5">{channel?.name}</Typography>
						{channel?.users && id && (
							<ListUsers
								users={channel.users}
								author={channel.author}
								chat_id={+id}
							/>
						)}
					</Box>
					<Box className={styles.messages}>
						{/* Get Messages */}
						{messages.map(message => (
							<Message message={message} key={message.id} />
						))}
						{id && <WriteMessage socket={socket} chat_id={+id} />}
					</Box>
				</Box>
			</Box>
		</Container>
	);
}
