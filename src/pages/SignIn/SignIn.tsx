import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../model/user.store';

export default function SignInPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const { signIn } = useUserStore();

	const signInHandle = () => {
		signIn({ email, password });
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
						label="Password"
						type="password"
						sx={{ width: '100%' }}
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<Button
						variant="contained"
						sx={{ width: '100%' }}
						onClick={signInHandle}
					>
						Sign in
					</Button>
					<Link to="/auth/sign-up">Sign up, if you don't have an account</Link>
				</Stack>
			</form>
		</Container>
	);
}
