export const shortifyID = (str: string, starting: number = 4, ending: number = starting) => str.slice(0, starting) + '...' + str.slice(str.length - ending)
export const shortifyString = (str: string, ending: number = 40) => str.length > ending ? str.slice(0, ending) + '...' : str

export const formatDate = (validDate: string | Date) => {
  const DATE = typeof validDate === 'string' ? new Date(validDate) : validDate

  const day = DATE.getDate() < 10 ? `0${DATE.getDate()}` : DATE.getDate()
  const month = (DATE.getMonth() + 1) < 10 ? `0${DATE.getMonth() + 1}` : DATE.getMonth() + 1
  const year = DATE.getFullYear()

  const hours = DATE.getHours() < 10 ? '0' + DATE.getHours() : DATE.getHours()
  const minutes = DATE.getMinutes() < 10 ? '0' + DATE.getMinutes() : DATE.getMinutes()

  return {
    DDMMYYYY: `${day}/${month}/${year}`,
    hours: `${hours}:${minutes}`,
    full: `${day}/${month}/${year} ${hours}:${minutes}`,
  }
}