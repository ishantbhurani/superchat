import { Chat } from '../components/chat/Chat'
import { Header } from '../components/header/Header'
import { SendMessage } from '../components/SendMessage'

export const Home = () => {
  return (
    <section className='mx-auto flex h-screen w-full max-w-5xl flex-col md:py-10'>
      <Header />
      <Chat />
      <SendMessage />
    </section>
  )
}
