import { Box, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import usersService from '../../../services/usersService';
import { IUser } from '../../../types/User.interface';
import User from './User/User';

const Users = () => {
	const [users, setUsers] = useState<IUser[]>([]);
	const [isLoaded, setIsLoaded] = useState(false);

	const getUsers = async (name?: string) => {
		const users = await usersService.getUsers(name);
		setUsers(users);
	};

	// Loading users in state
	useEffect(() => {
		if (users.length < 1 && !isLoaded) {
			getUsers();
			setIsLoaded(true);
		}
	}, [users]);

	return (
		<Box sx={{ width: '50%' }}>
			<Typography variant="h5" sx={{ mb: 3 }}>
				Users
			</Typography>
			<TextField
				label="Searching..."
				sx={{ width: '100%', mb: 3 }}
				onChange={e => {
					getUsers(e.target.value);
				}}
			/>
			{users.map(user => (
				<User key={user.id} user={user} />
			))}
		</Box>
	);
};

export default Users;
