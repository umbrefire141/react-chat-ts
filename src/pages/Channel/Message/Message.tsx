import { Box, Typography } from '@mui/material';
import { IMessageProps } from './Message.interface';
import styles from './Message.module.css';

const Message = ({ message }: IMessageProps) => {
	return (
		<Box className={styles.message} key={message.id}>
			<Box className={styles.message__wrapper}>
				<Box className={styles.message__info}>
					<Box className={styles.message__user}>
						<img
							src="https://images.unsplash.com/photo-1619454016518-697bc231e7cb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							className={styles.message__avatar}
						/>
						<Typography variant="body2">{message?.user?.name}</Typography>
					</Box>
					<Box className={styles.message__text}>{message?.message}</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Message;
