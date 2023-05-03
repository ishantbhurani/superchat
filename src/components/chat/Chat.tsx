import { useEffect, useRef, useState } from 'react'
import { Message } from './Message'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase'

export const Chat = () => {
  const [messages, setMessages] = useState<MessageType[]>([])
  const scroll = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt'))
    const unsub = onSnapshot(q, querySnapshot => {
      const messageDocs = [] as MessageType[]
      querySnapshot.forEach(doc =>
        messageDocs.push({
          id: doc.id,
          ...(doc.data() as Omit<MessageType, 'id'>),
        })
      )
      setMessages(messageDocs)
    })
    return () => unsub()
  }, [])

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <main className='flex flex-1 flex-col items-start gap-4 overflow-y-scroll border px-4 py-3 sm:px-6'>
      {messages.length ? (
        messages.map(message => <Message key={message.id} {...message} />)
      ) : (
        <div>Start the chat!</div>
      )}
      <span ref={scroll}></span>
    </main>
  )
}
