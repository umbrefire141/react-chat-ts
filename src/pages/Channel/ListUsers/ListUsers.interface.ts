import { IUser } from '../../../types/User.interface';

export interface IListUsersProps {
	chat_id: number;
	users: IUser[];
	author: IUser;
}
