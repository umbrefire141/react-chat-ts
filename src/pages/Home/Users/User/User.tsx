import {
	Button,
	Card,
	CardActions,
	CardHeader,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from '@mui/material';
import { useState } from 'react';
import { useUserStore } from '../../../../model/user.store';
import chatService from '../../../../services/chatService';
import { IUserProps } from './User.interface';

const User = ({ user }: IUserProps) => {
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState('');
	const { user: currentUser } = useUserStore();

	// Open modal
	const handleClickOpen = () => {
		setOpen(true);
	};

	// Close modal
	const handleClose = () => {
		setOpen(false);
	};

	const sendMessage = () => {
		chatService.createChat({
			receiver_ids: [user.id],
			message,
			name: user.name + '+' + currentUser?.name,
		});
		setOpen(false);
	};

	return (
		<Card sx={{ mb: 5 }}>
			<CardHeader title={user.name} />
			<CardActions>
				<Button variant="contained" onClick={handleClickOpen}>
					Write a message
				</Button>
			</CardActions>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Subscribe</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To subscribe to this website, please enter your email address here.
						We will send updates occasionally.
					</DialogContentText>
					<TextField
						autoFocus
						required
						margin="dense"
						label="Message"
						multiline
						rows={5}
						fullWidth
						variant="standard"
						value={message}
						onChange={e => setMessage(e.target.value)}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
					<Button onClick={sendMessage}>Send</Button>
				</DialogActions>
			</Dialog>
		</Card>
	);
};

export default User;
