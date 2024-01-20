import { createContext, useContext, useEffect, useState } from 'react'

import { Client, Account } from 'appwrite'

const AuthContext = createContext()

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65ac1e1af0ee05abe0ef')

const account = new Account(client)
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                // check user login or not
                const res = await account.get()
                setUser(res)
            } catch (e) {
                console.log(' User is Not Found  ')
            } finally {
                setLoading(false)
            }
        }
        checkAuth()
    }, [])

    const signIn = async (email, password) => {
        try {
            await account.createEmailSession(email, password)
            const response = await account.get()
            setUser(response)
        } catch (e) {
            console.log(' User login Error ', e)
        }
    }
    const signUp = async (userId, email, password, name) => {
        try {
            await account.create(userId, email, password, name)
        } catch (error) {
            console.log(' Sign Up Error ', error)
        }
    }
    const signOut = async () => {
        try {
            await account.deleteSession('current')
            setUser(null)
        } catch (error) {
            console.log(' Logout Error ', error)
        }
    }

    return (
        <AuthContext.Provider value={{ user, loading, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext)
}
