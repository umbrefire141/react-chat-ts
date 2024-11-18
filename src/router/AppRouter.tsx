import { Route, Routes } from 'react-router-dom';
import { routerAuth, routersWithAuthorization } from './router.const';

export default function AppRouter() {
	return (
		<Routes>
			{routersWithAuthorization.map(router => (
				<Route key={router.path} path={router.path} element={router.element} />
			))}
			{routerAuth.map(router => (
				<Route key={router.path} path={router.path} element={router.element} />
			))}
		</Routes>
	);
}
