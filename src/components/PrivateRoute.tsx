import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'

export const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { currentUser } = useAuth()

  return currentUser ? <>{children}</> : <Navigate to='login' replace />
}
