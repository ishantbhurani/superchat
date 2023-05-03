import { useEffect, useRef, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from './hooks/useAuth'

export const SendMessage = () => {
  const { currentUser } = useAuth()
  const [messageText, setMessageText] = useState<string>('')
  const focusRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (focusRef.current) focusRef.current.focus()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (messageText.length < 1) return
    try {
      await addDoc(collection(db, 'messages'), {
        createdAt: Date.now(),
        sender: currentUser?.displayName || 'user',
        senderId: currentUser?.uid,
        text: messageText,
      })
      setMessageText('')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <footer className='border px-4 py-3 sm:px-6'>
      <form onSubmit={handleSubmit} className='flex gap-2'>
        <input
          type='text'
          placeholder='Start typing...'
          ref={focusRef}
          value={messageText}
          onChange={e => setMessageText(e.target.value)}
          className='flex-1 rounded border px-2 py-2 text-sm focus:outline-none focus-visible:ring sm:px-4 sm:text-base'
        />
        <button
          aria-label='Send'
          type='submit'
          className='rounded bg-primary-400 px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            className='h-4 w-4 sm:h-6 sm:w-6'
            fill='currentColor'
          >
            <path d='m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z'></path>
          </svg>
        </button>
      </form>
    </footer>
  )
}
