import axios from '../lib/axios';
import { IUserWithPassword } from '../types/User.interface';

export const AUTH = 'auth';

export interface IAuth {
	email: string;
	password: string;
}

class AuthService {
	// Sign up
	async signUp(data: IUserWithPassword) {
		try {
			const user = await axios.post(`${AUTH}/sign-up`, data);
			localStorage.setItem('accessToken', user.data.accessToken);
			localStorage.setItem('user_id', user.data.user.id);

			if (user.status >= 400) {
				return null;
			}

			return user.data.user;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			throw error.response.data.message;
		}
	}

	// Sign in
	async signIn(data: IAuth) {
		try {
			const user = await axios.post(`${AUTH}/sign-in`, data);
			localStorage.setItem('accessToken', user.data.accessToken);
			localStorage.setItem('user_id', user.data.user.id);

			return user.data.user;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			throw error.response.data.message;
		}
	}

	// Logout
	async logout(): Promise<void> {
		localStorage.removeItem('accessToken');
		localStorage.removeItem('user_id');
	}

	// Get current user's info
	async getMe() {
		try {
			const user = await axios.get(`${AUTH}/getMe`);
			localStorage.setItem('accessToken', user.data.accessToken);
			localStorage.setItem('user_id', user.data.user.id);

			if (user.status >= 400) {
				return null;
			}

			return user.data.user;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			throw error.response.data.message;
		}
	}
}

export default new AuthService();
