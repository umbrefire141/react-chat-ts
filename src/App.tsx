import CheckUser from './middlewares/checkUser';
import AppRouter from './router/AppRouter';

function App() {
	return (
		<CheckUser>
			<AppRouter />
		</CheckUser>
	);
}

export default App;
