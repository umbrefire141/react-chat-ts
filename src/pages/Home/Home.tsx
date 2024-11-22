import { Container, Stack } from '@mui/material';
import Channels from './Channels/Channels';
import CreateChannel from './CreateChannel/CreateChannel';
import LogoutButton from './LogoutButton/LogoutButton';
import UserInfo from './UserInfo/UserInfo';
import Users from './Users/Users';

export default function HomePage() {
	return (
		<Container sx={{ mt: 5 }}>
			<LogoutButton />
			<UserInfo />
			<CreateChannel />
			<Stack direction="row" gap={5}>
				<Users />
				<Channels />
			</Stack>
		</Container>
	);
}
