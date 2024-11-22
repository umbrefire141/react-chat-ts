import axios from '../lib/axios';

export const USERS = 'users';

class UsersService {
	// Get users
	async getUsers(name?: string) {
		const { data: users } = await axios.get(
			`${USERS}?name=${name ? name : ''}`,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
				},
			}
		);

		return users;
	}

	// Get one user
	async getUser(id: number) {
		const { data: user } = await axios.get(`${USERS}/one/${id}`);
		return user;
	}
}

export default new UsersService();
