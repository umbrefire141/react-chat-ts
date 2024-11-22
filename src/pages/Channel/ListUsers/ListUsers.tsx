import {
	Avatar,
	Button,
	ButtonGroup,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	List,
	ListItem,
	ListItemAvatar,
	Stack,
	Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useUserStore } from '../../../model/user.store';
import chatService from '../../../services/chatService';
import { IUser } from '../../../types/User.interface';
import { IListUsersProps } from './ListUsers.interface';

const ListUsers = ({ chat_id, author, users }: IListUsersProps) => {
	const [open, setOpen] = React.useState(false);
	const { user: currentUser } = useUserStore();
	const [usersProps, setUsersProps] = useState<IUser[]>([]);

	// Open modal
	const handleClickOpen = () => {
		setOpen(true);
	};

	// Close modal
	const handleClose = () => {
		setOpen(false);
	};

	// Remove the user from the channel
	const removeUserFromChannel = async (user_id: number) => {
		await chatService.removeUserFromChat(chat_id, user_id);
		setUsersProps(users => users.filter(user => user.id !== user_id));
	};

	useEffect(() => {
		if (usersProps.length <= 1) {
			setUsersProps(users);
		}
	}, []);

	return (
		<>
			<Button onClick={handleClickOpen}>List of user</Button>
			<Dialog open={open} onClose={handleClose} fullWidth>
				<DialogTitle>{'Users'}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						<List>
							{usersProps.map(user => (
								<ListItem key={user.id}>
									<Stack
										direction="row"
										justifyContent="space-between"
										alignItems="center"
										sx={{ width: '100%' }}
									>
										<ListItemAvatar>
											<Stack alignItems="center" direction="row" gap={2}>
												<Avatar src="https://images.unsplash.com/photo-1619454016518-697bc231e7cb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Avatar>
												<div>
													<Typography>{user.email}</Typography>
													<Typography>{user.name}</Typography>
												</div>
											</Stack>
										</ListItemAvatar>
										{author.id === currentUser?.id && (
											<ButtonGroup>
												<Button onClick={() => removeUserFromChannel(user.id)}>
													Remove
												</Button>
											</ButtonGroup>
										)}
									</Stack>
								</ListItem>
							))}
							<ListItem>
								<Stack
									direction="row"
									justifyContent="space-between"
									alignItems="center"
									sx={{ width: '100%' }}
								>
									<ListItemAvatar>
										<Stack alignItems="center" direction="row" gap={2}>
											<Avatar src="https://images.unsplash.com/photo-1619454016518-697bc231e7cb?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></Avatar>
											<div>
												<Typography>{author.email}</Typography>
												<Typography>{author.name}</Typography>
											</div>
										</Stack>
									</ListItemAvatar>
								</Stack>
							</ListItem>
						</List>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default ListUsers;
