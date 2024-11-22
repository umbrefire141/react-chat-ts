import { Box, Typography } from '@mui/material';
import { useUserStore } from '../../../model/user.store';

const UserInfo = () => {
	const { user } = useUserStore();

	return (
		<Box sx={{ textAlign: 'center' }}>
			<Typography variant="h6" sx={{ mb: 3 }}>
				Name current {user?.name}
			</Typography>
		</Box>
	);
};

export default UserInfo;
