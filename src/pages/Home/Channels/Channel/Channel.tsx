import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useUserStore } from '../../../../model/user.store';
import chatService from '../../../../services/chatService';
import { IChannelProps } from './Channel.interface';

const Channel = ({ channel }: IChannelProps) => {
	const { user } = useUserStore();
	const navigate = useNavigate();

	// Join to the channel
	const joinToChannel = async (id: number) => {
		await chatService.joinToChat(+id);
		navigate(`/channel/${id}`);
	};

	return (
		<Card key={channel.id} sx={{ mb: 5 }}>
			<CardHeader title={channel.name} />
			<CardContent>{channel.users.length + 1} users in chat</CardContent>
			<CardActions>
				{user?.id === channel.users.find(u => u.id === user?.id)?.id ||
				user?.id === channel.author.id ? (
					<Button
						LinkComponent={Link}
						to={`/channel/${channel.id}`}
						variant="contained"
					>
						Visit
					</Button>
				) : (
					<Button variant="contained" onClick={() => joinToChannel(channel.id)}>
						Join
					</Button>
				)}
			</CardActions>
		</Card>
	);
};

export default Channel;
