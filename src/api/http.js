import axios from 'axios'

const http = axios.create({
	baseURL: 'https://absvision.ai/api/v1',
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})

// tokenni headerga avtomatik qo‘shish
http.interceptors.request.use(config => {
	const token = localStorage.getItem('token')
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

export default http
