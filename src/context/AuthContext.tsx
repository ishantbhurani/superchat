import { createContext, ReactNode, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth'
import { auth } from '../firebase'
import { Loading } from '../components/Loading'

export const AuthContext = createContext({
  currentUser: {} as User | null,
  loginWithGoogle: async () => ({} as User),
  logout: async () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  async function loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider()
      const { user } = await signInWithPopup(auth, provider)
      return user
    } catch (err) {
      console.error(err)
      throw new Error('error logging in')
    }
  }

  async function logout() {
    try {
      await signOut(auth)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser, loginWithGoogle, logout }}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  )
}
