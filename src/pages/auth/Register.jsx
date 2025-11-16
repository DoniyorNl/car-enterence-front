// import { useState } from 'react'
// import http from '../../api/http'
// import { useAuth } from '../../context/AuthContext'
// import { useNavigate } from 'react-router-dom'

// export default function Register() {
// 	const [firstName, setFirstName] = useState('')
// 	const [lastName, setLastName] = useState('')
// 	const [phone, setPhone] = useState('')
// 	const [password, setPassword] = useState('')
// 	const [error, setError] = useState('')

// 	const { login } = useAuth()
// 	const navigate = useNavigate()

// 	const handleRegister = async e => {
// 		e.preventDefault()
// 		setError('')

// 		try {
// 			// 1) Register API
// 			const registerRes = await http.post('/auth/register', {
// 				first_name: firstName,
// 				last_name: lastName,
// 				phone_number: phone,
// 				role: 'officer',
// 				hash_password: password,
// 			})
// 			console.log('Register success:', registerRes.data)
// 			// 2) Auto Login (backend sign-in token qaytaradi)
// 			const res = await http.post('/auth/sign-in', {
// 				phone_number: phone,
// 				password: password,
// 			})
// 			console.log(res)

// 			const token = res.data.token
// 			const user = res.data.user || { phone }

// 			login(token, user)

// 			navigate('/dashboard')
// 		} catch (err) {
// 			setError('Xatolik: Ro‘yxatdan o‘tolmadi. Maʼlumotlarni tekshiring.')
// 			console.log(err)
// 		}
// 	}

// 	return (
// 		<div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
// 			<form
// 				onSubmit={handleRegister}
// 				className='w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-4'
// 			>
// 				<h2 className='text-2xl font-semibold text-center'>Register</h2>

// 				<input
// 					type='text'
// 					placeholder='Ism'
// 					value={firstName}
// 					onChange={e => setFirstName(e.target.value)}
// 					className='w-full border p-2 rounded'
// 					required
// 				/>

// 				<input
// 					type='text'
// 					placeholder='Familiya'
// 					value={lastName}
// 					onChange={e => setLastName(e.target.value)}
// 					className='w-full border p-2 rounded'
// 					required
// 				/>

// 				<input
// 					type='text'
// 					placeholder='Phone Number'
// 					value={phone}
// 					onChange={e => setPhone(e.target.value)}
// 					className='w-full border p-2 rounded'
// 					required
// 				/>

// 				<input
// 					type='password'
// 					placeholder='Parol'
// 					value={password}
// 					onChange={e => setPassword(e.target.value)}
// 					className='w-full border p-2 rounded'
// 					required
// 				/>

// 				{error && <p className='text-red-500 text-sm'>{error}</p>}

// 				<button className='w-full bg-green-600 text-white py-2 rounded'>Ro‘yxatdan o‘tish</button>

// 				<p className='text-sm text-center mt-2'>
// 					Akkountingiz bormi?{' '}
// 					<a href='/login' className='text-blue-600 underline'>
// 						Login
// 					</a>
// 				</p>
// 			</form>
// 		</div>
// 	)
// }
