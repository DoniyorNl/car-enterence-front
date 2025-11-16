import { useState } from 'react'

export default function VehicleImage({ src, alt }) {
	const [open, setOpen] = useState(false)

	return (
		<>
			<img
				src={src}
				alt={alt}
				className='w-14 h-10 object-cover rounded-lg border cursor-pointer'
				onClick={() => setOpen(true)}
			/>
			{open && (
				<div
					className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'
					onClick={() => setOpen(false)}
				>
					<img src={src} alt={alt} className='max-h-[90%] max-w-[90%] rounded-lg shadow-lg' />
				</div>
			)}
		</>
	)
}
