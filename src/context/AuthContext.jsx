import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
	const [token, setToken] = useState(localStorage.getItem('token'))
	const [user, setUser] = useState(() => {
		try {
			const storedUser = localStorage.getItem('user')
			return storedUser && storedUser !== 'undefined' ? JSON.parse(storedUser) : null
		} catch {
			return null
		}
	})

	const login = data => {
		setToken(data.access_token)
		setUser(data.user)
		localStorage.setItem('token', data.access_token)
		localStorage.setItem('user', JSON.stringify(data.user))
	}

	const logout = () => {
		setToken(null)
		setUser(null)
		localStorage.removeItem('token')
		localStorage.removeItem('user')
	}

	return (
		<AuthContext.Provider value={{ token, user, login, logout }}>{children}</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
