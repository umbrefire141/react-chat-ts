import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../model/user.store';

export default function SignUpPage() {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const { signUp } = useUserStore();
	const navigate = useNavigate();

	const signUpHandle = () => {
		signUp({ email, name, password });
		navigate('/');
	};

	return (
		<Container>
			<Typography variant="h2" sx={{ my: 5, textAlign: 'center' }}>
				Authorization
			</Typography>
			<form>
				<Stack spacing={2}>
					<TextField
						label="Email"
						type="email"
						sx={{ width: '100%' }}
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<TextField
						label="Nickname"
						sx={{ width: '100%' }}
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<TextField
						label="Password"
						type="password"
						sx={{ width: '100%' }}
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<Button
						variant="contained"
						sx={{ width: '100%' }}
						onClick={signUpHandle}
					>
						Sign up
					</Button>
					<Link to="/auth/sign-in">Sign in, if you have an account</Link>
				</Stack>
			</form>
		</Container>
	);
}
