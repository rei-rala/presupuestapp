import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import useDarkTheme from '../hooks/useDarkTheme'

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

interface INavbarLinkProps {
  currentPath: string,
  linkPath: string,
  text: string
}

const NavbarLink: React.FC<INavbarLinkProps> = ({ currentPath, linkPath, text }) => {
  let activeClass = currentPath === linkPath ? 'current' : ''

  return (
    <Link href={linkPath} passHref>
      <li className={activeClass}>
        {text}
      </li>
    </Link>
  )
}

const Navbar: React.FC<{ style: string }> = ({ style }) => {
  const { darkTheme, toggleDarkTheme } = useDarkTheme()

  const router = useRouter()
  let path = router.pathname

  return (
    <div className={style}>
      <span>
        Logo
      </span>

      <nav>
        <ul>
          <NavbarLink currentPath={path} linkPath='/' text='Home' />
          <NavbarLink currentPath={path} linkPath='/spreadsheets' text='Mis planillas' />
          <NavbarLink currentPath={path} linkPath='/user' text='Usuario' />
          <button className={`themeToggler ${darkTheme ? 'dark' : 'light'}`} onClick={toggleDarkTheme}>{darkTheme ? <LightModeIcon /> : <DarkModeIcon />}</button>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar