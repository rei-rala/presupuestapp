import type { NextPage } from 'next'
import Head from 'next/head'

import { Navbar, Section, Footer } from '../components'
import styles from '../styles/Base.module.css'

import USERS from '../db/users.json'
import { User } from '../models'

import { shortifyID, formatDate } from '../utils'


const UserPage: NextPage<{ user: User }> = ({ user }) => {

  const shortedId = shortifyID(user.id, 6)

  return (
    <>
      <Head>
        <title>Usuario - PresupuestAPP</title>
        <meta name="description" content="Presupuestos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar className={styles.navbar} />

      <Section className={styles.section}>
        <h1> Configuraciones de usuario</h1>
        <hr />

        <span title={user.id}> {user.userName} id #{shortedId}</span>
        <hr />
        <span className='faint center'>Usuario desde: {formatDate(user.registered).full}</span>


      </Section >

      <Footer className={styles.footer} />

    </>
  )
}

export async function getServerSideProps() {
  // db async interaction
  let user = await USERS.users[1]

  return {
    props: {
      user,
    }
  }
}

export default UserPage