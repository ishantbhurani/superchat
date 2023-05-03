export const getFormattedDateTime = (timestamp: string) => {
  const date = new Date(+timestamp)
  const hour = date.getHours()
  const min = date.getMinutes()
  const minStr = min < 10 ? '0' + min : String(min)
  return hour + ':' + minStr
}
