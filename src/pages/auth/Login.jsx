import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import http from '../../api/http'
import { useAuth } from '../../context/AuthContext'

export default function Login() {
	const { login, token } = useAuth()
	const navigate = useNavigate()

	const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	// Agar token bo'lsa → Dashboardga yuboramiz
	useEffect(() => {
		if (token) {
			navigate('/dashboard')
		}
	}, [token, navigate])

	const handleLogin = async e => {
		e.preventDefault()
		setError('')
		setLoading(true)

		try {
			const res = await http.post('/auth/sign-in', {
				phone_number: phone,
				password,
			})

			// login(token, userData)
			login(res.data)

			navigate('/dashboard')
		} catch (err) {
			if (err.response?.status === 401) {
				setError('Telefon yoki parol noto‘g‘ri!')
			} else {
				setError('Serverda xatolik! Keyinroq urinib ko‘ring.')
			}
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
			<form
				onSubmit={handleLogin}
				className='w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-4'
			>
				<h2 className='text-2xl font-semibold text-center'>Login</h2>

				<input
					type='text'
					placeholder='Phone Number'
					value={phone}
					onChange={e => setPhone(e.target.value)}
					className='w-full border p-2 rounded'
					required
				/>

				<input
					type='password'
					placeholder='Parol'
					value={password}
					onChange={e => setPassword(e.target.value)}
					className='w-full border p-2 rounded'
					required
				/>

				{error && <p className='text-red-500 text-sm'>{error}</p>}

				<button
					className='w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50'
					disabled={loading}
				>
					{loading ? 'Kutilmoqda...' : 'Kirish'}
				</button>

				{/* <p className='text-sm text-center mt-2'>
					Yangi foydalanuvchisiz?{' '}
					<Link to='/register' className='text-blue-600 underline'>
						Register
					</Link>
				</p> */}
			</form>
		</div>
	)
}
