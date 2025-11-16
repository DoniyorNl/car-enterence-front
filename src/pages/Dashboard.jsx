import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { getVehiclesByDate } from '../api/vehicles'
import Navbar from '../components/Navbar'
import VehicleImage from '../components/Vehicalmage'

export default function Dashboard() {
	const { logout, user, token } = useAuth()
	const [vehicles, setVehicles] = useState([])
	const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

	useEffect(() => {
		if (!token) return
		getVehiclesByDate(date, token)
			.then(data => setVehicles(data))
			.catch(err => console.log('Error fetching vehicles', err))
	}, [token, date])

	return (
		<div className='min-h-screen bg-gray-50'>
			<Navbar
				user={{ ...user, logout }}
				date={date}
				setDate={setDate}
				vehiclesCount={vehicles.length}
			/>

			<main className='p-8 space-y-6'>
				<div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6 overflow-x-auto'>
					<table className='w-full text-sm'>
						<thead>
							<tr className='border-b border-gray-200 text-gray-600'>
								<th className='py-2 text-left font-medium'>ID</th>
								<th className='py-2 text-left font-medium'>Event</th>
								<th className='py-2 text-left font-medium'>Time</th>
								<th className='py-2 text-left font-medium'>Plate</th>
								<th className='py-2 text-left font-medium'>Front</th>
							</tr>
						</thead>
						<tbody>
							{vehicles.map(v => {
								const frontImg = v.images?.find(img => img.image_type === 'front')
								return (
									<tr
										key={v.vehicle.id}
										className='border-b last:border-0 border-gray-100 hover:bg-gray-50 transition'
									>
										<td className='py-2 px-2'>{v.vehicle.id}</td>
										<td className='py-2 capitalize'>
											<span className='inline-block px-2 py-1 text-xs bg-gray-100 rounded-md'>
												{v.vehicle.event_type}
											</span>
										</td>
										<td className='py-2 text-gray-600'>
											{new Date(v.vehicle.timestamp).toLocaleString()}
										</td>
										<td className='py-2'>{v.vehicle.license_plate || '-'}</td>
										<td className='py-2'>
											{frontImg ? (
												<VehicleImage src={frontImg.capture_url} alt={`Vehicle ${v.vehicle.id}`} />
											) : (
												<span className='text-gray-400 text-xs'>No image</span>
											)}
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</main>
		</div>
	)
}
