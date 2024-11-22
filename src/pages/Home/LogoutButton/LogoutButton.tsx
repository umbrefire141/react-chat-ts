import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../model/user.store';

const LogoutButton = () => {
	const { logout } = useUserStore();
	const navigate = useNavigate();

	return (
		<Button
			onClick={() => {
				logout();
				navigate('/auth/sign-in');
			}}
			variant="contained"
		>
			Logout
		</Button>
	);
};

export default LogoutButton;
