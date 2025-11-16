import axios from 'axios'

export async function getVehiclesByDate(date, token) {
	try {
		const res = await axios.get(`https://absvision.ai/api/v1/vehicles/by-date?date=${date}`, {
			headers: {
				Authorization: `Bearer ${token}`, // tokenni props yoki context orqali olamiz
			},
		})
		return res.data.vehicles
	} catch (err) {
		console.error(err)
		throw err
	}
}
