import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <main className='flex h-screen w-full flex-col items-center justify-center p-4'>
      <h1 className='text-8xl text-primary-400 sm:text-9xl'>404!</h1>
      <p className='mt-6 text-center tracking-widest sm:text-lg'>
        The page you are looking for is not available at the moment.
      </p>
      <Link
        to='/'
        className='mt-6 rounded-lg bg-primary-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-400/90 focus:outline-none focus:ring-primary-400/50 focus-visible:ring-4 sm:text-base'
      >
        Go Home
      </Link>
    </main>
  )
}
