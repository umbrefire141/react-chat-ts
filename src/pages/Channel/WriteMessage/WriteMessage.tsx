import { Button, TextField } from '@mui/material';
import { FormEvent, useState } from 'react';
import { useUserStore } from '../../../model/user.store';
import { IWriteMessageProps } from './WriteMessage.interface';
import styles from './WriteMessage.module.css';

const WriteMessage = ({ chat_id, socket }: IWriteMessageProps) => {
	const [message, setMessage] = useState('');
	const { user } = useUserStore();

	// Write a message
	const writeMessage = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		socket &&
			user?.id &&
			socket.emit('create_message', {
				message,
				chat_id,
				user_id: user?.id,
			});
		{
			setMessage('');
		}
	};

	return (
		<form onSubmit={writeMessage} className={styles.actions}>
			<TextField
				label="Message..."
				sx={{ width: '100%' }}
				value={message}
				onChange={e => setMessage(e.target.value)}
			/>
			<Button type="submit" variant="contained" sx={{ width: '200px' }}>
				Send
			</Button>
		</form>
	);
};

export default WriteMessage;
