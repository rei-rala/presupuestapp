export const shortify = (str: string, starting: number = 4, ending: number = 4) => {
  const shorted = str.slice(0, starting) + '...' + str.slice(-ending)

  return shorted
}