import { IChat } from './Chat.interface';

export interface IUser {
	id: number;
	email: string;
	name: string;
	chats: IChat[];
}

export interface IUserWithPassword extends Pick<IUser, 'email' | 'name'> {
	password: string;
}
