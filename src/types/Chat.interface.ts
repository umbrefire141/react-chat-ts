import { IPhoto } from './Photo.interface';
import { IUser } from './User.interface';

export interface IChat {
	id: number;
	name?: string;
	messages: IMessage[];
	users: IUser[];
	author: IUser;
}

export interface IMessage {
	id: number;
	message: string;
	photos: IPhoto[];
	chat: IChat;
	user: IUser;
}
