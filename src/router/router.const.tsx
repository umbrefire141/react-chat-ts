import { ReactNode } from 'react';
import HomePage from '../pages/Home/Home';
import SignUpPage from '../pages/SignUp/SignUp';

type Router = {
	path: string;
	element: ReactNode;
};

export const routersWithAuthorization: Router[] = [
	{
		element: <HomePage />,
		path: '/',
	},
];

export const routerAuth: Router[] = [
	{
		element: <SignUpPage />,
		path: '/auth',
	},
];
