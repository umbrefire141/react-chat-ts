import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	TextField,
	Typography,
} from '@mui/material';
import { FormEvent, useEffect, useState } from 'react';
import chatService from '../../../services/chatService';
import usersService from '../../../services/usersService';
import { IUser } from '../../../types/User.interface';

const CreateChannel = () => {
	const [userIds, setUserIds] = useState<string[]>([]);
	const [users, setUsers] = useState<IUser[]>([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [nameChat, setNameChat] = useState('');
	const handleChange = (event: SelectChangeEvent<typeof userIds>) => {
		const {
			target: { value },
		} = event;
		setUserIds(typeof value === 'string' ? value.split(',') : value);
	};

	// Get users in state
	const getUsers = async () => {
		const users = await usersService.getUsers();
		setUsers(users);
	};

	useEffect(() => {
		if (users.length < 1 && !isLoaded) {
			getUsers();
			setIsLoaded(true);
		}
	}, []);

	// Create channel
	const handleForm = (e: FormEvent<HTMLFormElement>) => {
		//  prevent default events
		e.preventDefault();

		chatService.createChat({ name: nameChat, receiver_ids: userIds as any });

		// reload page
		window.location.reload();
	};

	return (
		<Box sx={{ mb: 5 }}>
			<form onSubmit={handleForm}>
				<Typography variant="h6" sx={{ mb: 2 }}>
					Create channel
				</Typography>
				<TextField
					label="Name channel"
					fullWidth
					sx={{ mb: 2 }}
					value={nameChat}
					onChange={e => setNameChat(e.target.value)}
				/>
				<FormControl fullWidth sx={{ mb: 2 }}>
					<InputLabel id="users-ids">Users</InputLabel>
					<Select
						labelId="users-ids"
						multiple
						value={userIds}
						onChange={handleChange}
						input={<OutlinedInput label="Name" />}
					>
						{users.map(user => (
							<MenuItem key={user.id} value={user.id}>
								{user.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<Button type="submit" variant="contained" fullWidth>
					Create
				</Button>
			</form>
		</Box>
	);
};

export default CreateChannel;
