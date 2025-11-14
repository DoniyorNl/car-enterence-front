import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import EnterForm from './pages/enterForm'
import CarInfo from './pages/CarInfo'

export default function App() {
	return (
		<BrowserRouter>
			<div className='p-4'>
				{/* Navigation */}
				<nav className='flex gap-4 mb-6 border-b pb-3'>
					<a href='/' className='text-blue-600'>
						Dashboard
					</a>
					<a href='/enter' className='text-blue-600'>
						Enter Form
					</a>
					<a href='/car' className='text-blue-600'>
						Car Info
					</a>
				</nav>

				{/* Pages */}
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/enter' element={<EnterForm />} />
					<Route path='/car' element={<CarInfo />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}
