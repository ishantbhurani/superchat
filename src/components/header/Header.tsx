import { Avatar } from './Avatar'

export const Header = () => {
  return (
    <header className='flex items-center justify-between border px-4 py-3 sm:px-6'>
      <h1 className='text-lg font-bold'>
        Super<span className='text-primary-500'>Chat</span>
      </h1>
      <Avatar />
    </header>
  )
}
