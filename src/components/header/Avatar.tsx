import { useAuth } from '../hooks/useAuth'
import defaultAvatar from '../../assets/default.svg'

export const Avatar = () => {
  const { currentUser, logout } = useAuth()

  return (
    <button
      aria-label='logout'
      title='logout'
      onClick={logout}
      className='h-8 w-8 overflow-hidden rounded-full border-none bg-none focus:outline-none focus-visible:ring'
    >
      <img
        src={currentUser?.photoURL || defaultAvatar}
        alt={currentUser?.displayName || 'User'}
        className='w-full object-cover'
      />
    </button>
  )
}
