import { Box, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import chatService from '../../../services/chatService';
import { IChat } from '../../../types/Chat.interface';
import Channel from './Channel/Channel';

const Channels = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [channels, setChannels] = useState<IChat[]>([]);

	//  Get channels in state
	const getChannels = async (name?: string) => {
		const channels = await chatService.getChats(name);
		setChannels(channels);
	};

	useEffect(() => {
		if (channels.length < 1 && !isLoaded) {
			getChannels();
			setIsLoaded(true);
		}
	}, [channels]);

	return (
		<Box sx={{ width: '50%' }}>
			<Typography variant="h5" sx={{ mb: 3 }}>
				Channels
			</Typography>
			<TextField label="Searching..." sx={{ width: '100%', mb: 3 }} />
			{channels.map(channel => (
				<Channel channel={channel} key={channel.id} />
			))}
		</Box>
	);
};

export default Channels;
