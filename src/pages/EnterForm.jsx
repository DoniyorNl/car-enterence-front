export default function EnterForm() {
	return (
		<div className='p-6 max-w-lg mx-auto'>
			<h1 className='text-xl font-semibold mb-4'>Mashina kirish formasi</h1>

			<div className='space-y-4 border p-5 rounded-lg'>
				<div>
					<label className='text-sm text-gray-600'>Mashina raqami</label>
					<input type='text' placeholder='90A 777AA' className='w-full p-2 border rounded mt-1' />
				</div>

				<div>
					<label className='text-sm text-gray-600'>Haydovchi ismi</label>
					<input
						type='text'
						placeholder='Haydovchi ismi'
						className='w-full p-2 border rounded mt-1'
					/>
				</div>

				<div>
					<label className='text-sm text-gray-600'>Telefon raqami</label>
					<input
						type='text'
						placeholder='+998 90 123 45 67'
						className='w-full p-2 border rounded mt-1'
					/>
				</div>

				<button className='w-full p-2 bg-blue-600 text-white rounded'>Saqlash</button>
			</div>
		</div>
	)
}
