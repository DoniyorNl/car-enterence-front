import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CarInfo from './pages/CarInfo'
import Login from './pages/auth/Login'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './context/ProtectedRoute'

export default function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route
						path='/'
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>
					<Route path='/dashboard' element={<Navigate to='/' replace />} />
					<Route
						path='/car'
						element={
							<ProtectedRoute>
								<CarInfo />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	)
}
