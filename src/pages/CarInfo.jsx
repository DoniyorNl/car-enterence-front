export default function CarInfo() {
	return (
		<div className='p-6 max-w-2xl mx-auto'>
			<h1 className='text-xl font-semibold mb-4'>Mashina ma'lumotlari</h1>

			<div className='border rounded-lg p-5'>
				<div className='mb-4'>
					<p className='text-gray-500 text-sm'>Raqam:</p>
					<p className='text-lg font-semibold'>90A 777AA</p>
				</div>

				<div className='mb-4'>
					<p className='text-gray-500 text-sm'>Haydovchi:</p>
					<p className='text-lg font-semibold'>Doston Beknazarov</p>
				</div>

				<div className='mb-4'>
					<p className='text-gray-500 text-sm'>Telefon:</p>
					<p className='text-lg font-semibold'>+998 90 123 45 67</p>
				</div>

				<div className='mb-4'>
					<p className='text-gray-500 text-sm'>Kirish vaqti:</p>
					<p className='text-lg font-semibold'>10:22, 2025-11-14</p>
				</div>

				<button className='w-full p-2 bg-red-600 text-white rounded'>
					Chiqishni yozib qo‘yish
				</button>
			</div>
		</div>
	)
}
