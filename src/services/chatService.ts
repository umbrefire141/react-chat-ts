import axios from '../lib/axios';

export const CHAT = 'chat';

export interface IChatDto {
	name: string;
	receiver_ids: number[];
	message?: string;
}

class ChatService {
	// Create channel
	async createChat(data: IChatDto) {
		await axios.post(`${CHAT}`, data);
	}

	// Get channels
	async getChats(name?: string) {
		const { data } = await axios.get(`${CHAT}?name=${name ? name : ''}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
			},
		});
		return data;
	}

	// Get one chat
	async getChat(id: number) {
		const { data } = await axios.get(`${CHAT}/${id}`);
		return data;
	}

	// Join to the chat
	async joinToChat(id: number) {
		await axios.patch(`${CHAT}/join/${+id}`);
	}

	// Remove the user from the chat
	async removeUserFromChat(chat_id: number, user_id: number) {
		await axios.patch(`${CHAT}/remove/${+chat_id}`, { user_id });
	}
}

export default new ChatService();
