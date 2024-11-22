import { create } from 'zustand';
import authService from '../services/authService';
import { IUser } from '../types/User.interface';

interface UserState {
	user: IUser | null;
	error: string | null;
	loading: boolean;
	signIn: (data: any) => void;
	signUp: (data: any) => void;
	logout: () => void;
	getMe: () => void;
}

export const useUserStore = create<UserState>(set => ({
	error: null,
	user: null,
	loading: false,
	signIn: async data => {
		set({ loading: true });
		try {
			const response = await authService.signIn(data);
			set({ loading: false, user: response });
		} catch (error) {
			set({ loading: false, user: null, error } as { error: string });
		}
	},
	signUp: async data => {
		set({ loading: true });
		try {
			const response = await authService.signUp(data);
			set({ loading: false, user: response });
		} catch (error) {
			set({ loading: false, error: error } as { error: string });
		}
	},
	logout: async () => {
		await authService.logout();
		set({ user: null });
	},

	getMe: async () => {
		set({ loading: true });
		try {
			const response = await authService.getMe();
			set({ user: response });
		} catch (error) {
			set({ error: error } as { error: string }, false);
		} finally {
			set({ loading: false });
		}
	},
}));
