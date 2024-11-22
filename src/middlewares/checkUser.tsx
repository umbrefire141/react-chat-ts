import { PropsWithChildren, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from '../model/user.store';

// Check authorization
export default function CheckUser({ children }: PropsWithChildren) {
	const { getMe, loading, error, user } = useUserStore();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	useEffect(() => {
		// Get the user's info
		if (!user && !pathname.startsWith('/auth')) getMe();
	}, [user]);

	useEffect(() => {
		// Navigate to authorization page if you aren't authorization
		if (!user && error) navigate('/auth/sign-in');
	}, [error]);

	if (loading) {
		return <div>Loading...</div>;
	}

	return <>{children}</>;
}
