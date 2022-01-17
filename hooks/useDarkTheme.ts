import react, { useState, useEffect } from 'react'

const useDarkTheme = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false)
  const toggleDarkTheme = () => setDarkTheme(!darkTheme)

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('darkTheme') === 'true'
    setDarkTheme(localStorageTheme)
  }, [])

  useEffect(() => {
    const BODY_CLASSES = document.querySelector('body')?.classList
    if (BODY_CLASSES) {
      BODY_CLASSES.forEach(x => x.includes('theme-') && BODY_CLASSES.remove(x))
      BODY_CLASSES.add(`theme-${darkTheme ? 'dark' : 'light'}`)
    }

    localStorage.setItem('darkTheme', JSON.stringify(darkTheme))
  }, [darkTheme])

  return ({ darkTheme, setDarkTheme, toggleDarkTheme })
}

export default useDarkTheme