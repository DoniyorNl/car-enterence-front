export default function Dashboard() {
	return (
		<div className='p-6'>
			<h1 className='text-xl font-semibold mb-4'>Dashboard</h1>

			{/* Stat Cards */}
			<div className='grid grid-cols-3 gap-4 mb-6'>
				<div className='p-4 border rounded-md shadow-sm'>
					<p className='text-gray-500 text-sm'>Bugun kirganlar</p>
					<h2 className='text-2xl font-bold'>34</h2>
				</div>
				<div className='p-4 border rounded-md shadow-sm'>
					<p className='text-gray-500 text-sm'>Bugun chiqqanlar</p>
					<h2 className='text-2xl font-bold'>27</h2>
				</div>
				<div className='p-4 border rounded-md shadow-sm'>
					<p className='text-gray-500 text-sm'>Ichkarida</p>
					<h2 className='text-2xl font-bold'>12</h2>
				</div>
			</div>

			{/* Table placeholder */}
			<div className='border rounded-lg p-4'>
				<h2 className='text-lg font-semibold mb-3'>Oxirgi kirishlar</h2>

				<div className='w-full border rounded'>
					<table className='w-full text-left text-sm'>
						<thead className='bg-gray-100'>
							<tr>
								<th className='p-2 border'>#</th>
								<th className='p-2 border'>Raqam</th>
								<th className='p-2 border'>Haydovchi</th>
								<th className='p-2 border'>Vaqt</th>
							</tr>
						</thead>
						<tbody>
							{/* Static UI */}
							<tr>
								<td className='p-2 border'>1</td>
								<td className='p-2 border'>90A 777AA</td>
								<td className='p-2 border'>Doston</td>
								<td className='p-2 border'>10:22</td>
							</tr>
							<tr>
								<td className='p-2 border'>2</td>
								<td className='p-2 border'>01V 123ZZ</td>
								<td className='p-2 border'>Nodir</td>
								<td className='p-2 border'>09:58</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}
