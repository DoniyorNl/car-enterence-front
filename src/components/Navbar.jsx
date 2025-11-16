export default function Navbar({ user, date, setDate, vehiclesCount }) {
	return (
		<div className='sticky top-0 z-50 bg-white shadow-sm border-b'>
			<div className='flex flex-col sm:flex-row items-center justify-between p-4 bg-white border-b border-gray-200 shadow-sm space-y-2 sm:space-y-0'>
				<div className='flex items-center space-x-2'>
					<div className='text-xl font-bold text-gray-800'>Parking Dashboard</div>
				</div>

				<div className='flex items-center space-x-4'>
					<div className='flex items-center space-x-2'>
						<label className='text-gray-600 text-sm'>Select Date:</label>
						<input
							type='date'
							value={date}
							onChange={e => setDate(e.target.value)}
							className='border rounded px-2 py-1 text-sm'
						/>
					</div>

					{vehiclesCount !== undefined && (
						<div className='text-gray-700 text-sm'>
							<span className='font-semibold'>{vehiclesCount}</span> vehicles today
						</div>
					)}
				</div>

				<div className='flex items-center space-x-4'>
					<div className='text-gray-700 text-sm'>
						{user?.phone_number || user?.full_name || 'User'}
					</div>
					<button
						onClick={user?.logout}
						className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm'
					>
						Logout
					</button>
				</div>
			</div>
		</div>
	)
}
