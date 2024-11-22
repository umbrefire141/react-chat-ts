import Axios from 'axios';

// Create instance
const axios = Axios.create({
	baseURL: `${import.meta.env.VITE_API_URL}/api/`,
	headers: {
		'Content-Type': 'application/json',
		authorization: localStorage.getItem('accessToken')
			? `Bearer ${localStorage.getItem('accessToken')}`
			: '',
	},
});

export default axios;
