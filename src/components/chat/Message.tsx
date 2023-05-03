import { getFormattedDateTime } from '../../utils'
import { useAuth } from '../hooks/useAuth'

export const Message = ({ text, createdAt, sender, senderId }: MessageType) => {
  const { currentUser } = useAuth()
  const sentByUser = currentUser?.uid === senderId

  return (
    <div
      className={`flex max-w-[85%] flex-col sm:max-w-[65%] ${
        sentByUser ? 'items-end self-end' : 'items-start'
      }`}
    >
      <span
        className={`pb-1 text-sm text-zinc-400 ${
          sentByUser ? 'self-end pe-2' : 'ps-2'
        }`}
      >
        {sender}
      </span>
      <div
        className={`rounded-2xl p-3 text-sm sm:text-base ${
          sentByUser
            ? 'rounded-ee-none bg-zinc-200'
            : 'rounded-es-none bg-primary-400 text-white'
        }`}
      >
        {text}
      </div>
      <span
        className={`pt-1 text-sm text-zinc-400 ${
          sentByUser ? 'self-end pe-2' : 'ps-2'
        }`}
      >
        {getFormattedDateTime(createdAt)}
      </span>
    </div>
  )
}
