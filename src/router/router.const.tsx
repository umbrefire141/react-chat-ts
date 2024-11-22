import { ReactNode } from 'react';
import ChannelPage from '../pages/Channel/Channel';
import HomePage from '../pages/Home/Home';
import SignInPage from '../pages/SignIn/SignIn';
import SignUpPage from '../pages/SignUp/SignUp';

type Router = {
	path: string;
	element: ReactNode;
};

// Routers with authorization
export const routersWithAuthorization: Router[] = [
	{
		element: <HomePage />,
		path: '/',
	},
	{
		element: <ChannelPage />,
		path: 'channel/:id',
	},
];

// Routers without authorization
export const routerAuth: Router[] = [
	{
		element: <SignInPage />,
		path: '/auth/sign-in',
	},
	{
		element: <SignUpPage />,
		path: '/auth/sign-up',
	},
];
